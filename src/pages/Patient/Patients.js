import React, { Fragment, useState } from 'react';
import * as patientService from '../../services/patientService';
import ConfirmDialog from '../../components/ConfirmDialog';
import useTable from '../../components/useTable';
import {
  InputAdornment,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@mui/material';
import { Controls } from '../../components/controls/Controls';
import Popup from '../../components/Popup';
import PatientForm from './PatientForm';
import Notification from '../../components/Notification';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default function Patients() {
  const headCells = [
    { id: 'fullName', label: 'Họ và tên' },
    { id: 'email', label: 'Số' },
    { id: 'mobile', label: 'Địa chỉ' },
    { id: 'city', label: 'Giới tính' },
    { id: 'department', label: 'Ngày tháng năm sinh' },
    { id: 'actions', label: 'Hoạt động', disableSorting: true },
  ];
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(patientService.getAllPatients());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) {
      patientService.insertEmployee(employee);
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
      setRecords(patientService.getAllPatients());
      setNotify({
        isOpen: true,
        message: 'Thêm mới thành công',
        type: 'success',
      });
    } else {
      patientService.updatePatient(employee);
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
      setRecords(patientService.getAllPatients());
      setNotify({
        isOpen: true,
        message: 'Chỉnh sửa thành công',
        type: 'info',
      });
    }
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const linkToProfile = (item) => {
    setRecordForEdit(item);
    // setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    patientService.deletePatient(id);
    setRecords(patientService.getAllPatients());
    setNotify({
      isOpen: true,
      message: 'Xóa thành công',
      type: 'error',
    });
  };

  return (
    <Fragment>
      <section className="p-6 xl:max-w-6xl xl:mx-auto">
        <section className="pt-6 mb-6 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className="inline-flex justify-center items-center w-6 h-6 mr-2">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"></path>
              </svg>
            </span>
            <h1 className="leading-tight text-2xl">Thêm bệnh nhân</h1>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between ">
            <div className="bg-white flex mb-6 last:mb-0 rounded-2xl flex-col dark:bg-slate-900/70">
              <div className="flex-1 p-6">
                <div className="justify-between items-center  block md:flex">
                  <div className="justify-start items-center  block md:flex">
                    <span className="inline-flex justify-center items-center w-12 h-12 dark:bg-slate-800 md:mr-6 ">
                      <img
                        src="https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                    </span>
                    <div className="text-center space-y-1 md:text-left md:mr-6">
                      <h4 className="text-xl">Tạ Văn Thoại</h4>
                      <p className="text-gray-500 dark:text-slate-400">
                        <b>3 days ago</b> via Turcotte
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right space-y-2">
                    <p className="text-sm text-gray-500">Home Loan Account</p>
                    <div>
                      <div className="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white ">
                        <span>deposit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="bg-white flex mb-6 last:mb-0 rounded-2xl flex-col dark:bg-slate-900/70">
              <div className="flex-1 p-6">
                <div className="justify-between items-center  block md:flex">
                  <div className="justify-start items-center  block md:flex">
                    <span className="inline-flex justify-center items-center w-12 h-12 dark:bg-slate-800 md:mr-6 ">
                      <img
                        src="https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                    </span>
                    <div className="text-center space-y-1 md:text-left md:mr-6">
                      <h4 className="text-xl">Tạ Văn Thoại</h4>
                      <p className="text-gray-500 dark:text-slate-400">
                        <b>3 days ago</b> via Turcotte
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right space-y-2">
                    <p className="text-sm text-gray-500">Home Loan Account</p>
                    <div>
                      <div className="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white ">
                        <span>deposit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="bg-white flex mb-6 last:mb-0 rounded-2xl flex-col dark:bg-slate-900/70">
              <div className="flex-1 p-6">
                <div className="justify-between items-center  block md:flex">
                  <div className="justify-start items-center  block md:flex">
                    <span className="inline-flex justify-center items-center w-12 h-12 dark:bg-slate-800 md:mr-6 ">
                      <img
                        src="https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                    </span>
                    <div className="text-center space-y-1 md:text-left md:mr-6">
                      <h4 className="text-xl">Tạ Văn Thoại</h4>
                      <p className="text-gray-500 dark:text-slate-400">
                        <b>3 days ago</b> via Turcotte
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right space-y-2">
                    <p className="text-sm text-gray-500">Home Loan Account</p>
                    <div>
                      <div className="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white ">
                        <span>deposit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="bg-white flex mb-6 last:mb-0 rounded-2xl flex-col dark:bg-slate-900/70">
              <div className="flex-1 p-6">
                <div className="justify-between items-center  block md:flex">
                  <div className="justify-start items-center  block md:flex">
                    <span className="inline-flex justify-center items-center w-12 h-12 dark:bg-slate-800 md:mr-6 ">
                      <img
                        src="https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                    </span>
                    <div className="text-center space-y-1 md:text-left md:mr-6">
                      <h4 className="text-xl">Tạ Văn Thoại</h4>
                      <p className="text-gray-500 dark:text-slate-400">
                        <b>3 days ago</b> via Turcotte
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right space-y-2">
                    <p className="text-sm text-gray-500">Home Loan Account</p>
                    <div>
                      <div className="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white ">
                        <span>deposit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col justify-between"> */}
        </div>
        {/* </div> */}

        <section className="pt-6 mb-6 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex justify-center items-center w-6 h-6 mr-2">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"></path>
              </svg>
            </span>
            <h1 className="leading-tight text-2xl">Danh sách bệnh nhân</h1>
          </div>
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <Toolbar className="flex justify-between">
            <Controls.Input
              label="Tìm kiếm bệnh nhân"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              // size="small"
              onChange={handleSearch}
            />
            <Controls.Button
              startIcon={<AddIcon />}
              type="button"
              text="Thêm mới"
              onClick={() => {
                setOpenPopup(true);
              }}
            />
          </Toolbar>

          <div className="m-3">
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      style={{ fontWeight: 'bold', cursor: 'pointer' }}
                      onClick={() => {
                        linkToProfile(item);
                      }}>
                      <Link to={'/benh-nhan/' + item.id}>{item.fullName}</Link>
                    </TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>
                      {item.gender === 'male'
                        ? 'Nam'
                        : item.gender === 'female'
                        ? 'Nữ'
                        : 'Khác'}
                    </TableCell>
                    <TableCell>{item.hireDate}</TableCell>

                    <TableCell>
                      <Controls.ActionButton
                        color="primary"
                        onClick={() => {
                          openInPopup(item);
                        }}>
                        <EditIcon fontSize="small" />
                      </Controls.ActionButton>
                      <Controls.ActionButton>
                        <DeleteIcon
                          color="error"
                          variant="contained"
                          onClick={() => {
                            setConfirmDialog({
                              isOpen: true,
                              title: 'Xác nhận hành động xóa?',
                              subTitle: 'Bạn không thể hoàn tác hành động này',
                              onConfirm: () => {
                                onDelete(item.id);
                              },
                            });
                          }}
                        />
                      </Controls.ActionButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </div>

          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title="Thêm bệnh nhân mới">
            <PatientForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
          </Popup>
          <Notification notify={notify} setNotify={setNotify} />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </div>
      </section>
    </Fragment>
  );
}
