import React, { Fragment, useState } from 'react';
import PatientForm from '../../pages/Patient/PatientForm';
import ConfirmDialog from '../ConfirmDialog';
import Notification from '../Notification';
import Popup from '../Popup';
import * as patientService from '../../services/patientService';
import useTable from '../useTable';
import { Controls } from '../controls/Controls';
import AddIcon from '@mui/icons-material/Add';
import StaffForm from '../../pages/Staffs/StaffForm';

const Topbar = () => {
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
    <nav className="xl:pl-60  top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800">
      <div className="flex lg:items-stretch xl:max-w-6xl xl:mx-auto">
        <div className="flex flex-1 items-stretch h-14">
          <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex lg:hidden text-black hover:text-blue-500 py-2 px-3">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
              </svg>
            </span>
          </div>
          <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 hidden lg:flex xl:hidden text-black hover:text-blue-500 py-2 px-3">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-none items-stretch flex h-14 lg:hidden">
            <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex text-black hover:text-blue-500 py-2 px-3">
              <span className="inline-flex justify-center items-center w-6 h-6 ">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="inline-block">
                  <path
                    fill="currentColor"
                    d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="hidden max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800">
            <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 lg:py-2 lg:px-3 ">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0 mx-5">
                {/* <div className="inline-flex items-center capitalize leading-none text-base border rounded-xl py-3 px-4 bg-emerald-600 border-emerald-200 text-white ml-5"> */}
                {/* <span>Thêm bệnh nhân</span> */}

                <Controls.Button
                  startIcon={<AddIcon />}
                  type="button"
                  text="Thêm bệnh nhân"
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                />
                {/* </div> */}
              </div>
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
                <Controls.Button
                  startIcon={<AddIcon />}
                  type="button"
                  text="Thêm nhân viên"
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                />
              </div>
            </div>

            <div className="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-slate-400 lg:py-2 lg:px-3 ">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
                <div className="w-6 h-6 mr-3 inline-flex">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
                    alt="John Doe"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
                <span className="px-2 transition-colors ">Tạ Văn Thoại</span>
              </div>
            </div>

            {/* <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 lg:w-16 lg:justify-center flex-end">
              <div className="flex items-center ">
                <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    class="inline-block">
                    <path
                      fill="currentColor"
                      d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Thêm bệnh nhân mới">
        {/* <PatientForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} /> */}
        <PatientForm addOrEdit={addOrEdit} />
      </Popup>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Thêm bệnh nhân mới">
        <StaffForm addOrEdit={addOrEdit} />
      </Popup>

      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </nav>
  );
};

export default Topbar;
