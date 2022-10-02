import React, { Fragment, useState } from 'react';
import * as employeeService from '../../services/employeeService';
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
import EmployeeForm from './EmployeeForm';
import Notification from '../../components/Notification';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];

export default function Employees() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(employeeService.getAllEmployees());
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
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success',
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    employeeService.deleteEmployee(id);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
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
          <button
            className="inline-flex  justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-blue-600 text-white dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
            type="button">
            Thêm mới
          </button>
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <div className="m-3"></div>
        </div>
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
            <h1 className="leading-tight text-2xl">Danh sách bệnh nhân</h1>
          </div>
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <Toolbar className="flex justify-between">
            <Controls.Input
              className="w-3/4"
              label="Search Employees"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
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
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>
                      {item.gender === 'male' ? 'Nam' : 'Nữ'}
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
                              title: 'Bạn có muốn xóa?',
                              subTitle: 'Bạn không thể undo hành động này',
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
            <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
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
