import { DataGrid } from '@mui/x-data-grid';
import React, { Fragment } from 'react';
import { rows } from '../../DummyData';
import AddPatient from './AddPatient';
import Button from '@mui/material/Button';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const ListPatient = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <section className="p-6 xl:max-w-6xl xl:mx-auto">
        <section className=" mb-6 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"></path>
              </svg>
            </span>
            <h1 className="leading-tight text-3xl">
              Bệnh nhân sẽ khám trong ngày 12/12/2022
            </h1>
          </div>
          <a className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-gray-800 dark:border-white ring-gray-300 dark:ring-gray-400 bg-gray-800 text-white dark:bg-white dark:text-black hover:bg-gray-700 hover:dark:bg-slate-100  text-sm px-3 py-1">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
            </span>
            <span className="px-1 ">
              <Button variant="outlined" onClick={handleClickOpen}>
                Thêm bệnh nhân
              </Button>
              <AddPatient />
            </span>
          </a>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
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
                      <h4 className="text-xl">375.53</h4>
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
          <div className="flex flex-col justify-between">
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
                      <h4 className="text-xl">375.53</h4>
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
                      <h4 className="text-xl">375.53</h4>
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
        </div>
        {/* Home Loan Account */}

        {/* Lịch Trực */}
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
            <h1 className="leading-tight text-2xl">Lịch trực</h1>
          </div>
          <button
            className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
            type="button">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"></path>
              </svg>
            </span>
          </button>
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <div className="flex-1 p-6">
            {/* <canvas
            role="img"
            height="480"
            width="1320"
            className="h-96"
            style="display: block; box-sizing: border-box; height: 384px; width: 1056px;"></canvas> */}
            {/* <WorkSchedules /> */}
          </div>
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
                  d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"></path>
              </svg>
            </span>
            <h1 className="leading-tight text-2xl">Bệnh nhân</h1>
          </div>
          <button
            className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
            type="button">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
              </svg>
            </span>
          </button>
        </section>
        <div className="bg-white flex  rounded-2xl flex-col dark:bg-slate-900/70">
          <div className="flex-1">
            <div style={{ height: 380, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ListPatient;
