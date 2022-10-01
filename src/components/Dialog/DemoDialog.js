// import { DataGrid } from '@mui/x-data-grid';
// import React, { Fragment, useState } from 'react';
// import { Controls } from '../controls/Controls';
// import AddPatient from '../Patient/AddPatient';
// import Popup from '../Popup/Popup';
// import PopupAdd from '../Popup/PopupAdd';
// import { rows } from '../../DummyData';

// const Doctors = () => {
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
//   const [openPopup, setOpenPopup] = useState(false);
//   return (
//     <Fragment>
//       <section className="p-6 xl:max-w-6xl xl:mx-auto">
//         <section className=" mb-6 flex items-center justify-between">
//           <div className="flex items-center justify-start">
//             <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
//               <svg
//                 viewBox="0 0 24 24"
//                 width="24"
//                 height="24"
//                 className="inline-block">
//                 <path
//                   fill="currentColor"
//                   d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"></path>
//               </svg>
//             </span>
//             <h1 className="leading-tight text-3xl">
//               Bệnh nhân sẽ khám trong ngày 12/12/2022
//             </h1>
//           </div>

//           <span className="px-1 ">
//             <AddPatient />
//           </span>
//         </section>

//         {/* Lịch Trực */}
//         <section className="pt-6 mb-6 flex items-center justify-between">
//           <div className="flex items-center justify-start">
//             <span className="inline-flex justify-center items-center w-6 h-6 mr-2">
//               <svg
//                 viewBox="0 0 24 24"
//                 width="20"
//                 height="20"
//                 className="inline-block">
//                 <path
//                   fill="currentColor"
//                   d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"></path>
//               </svg>
//             </span>
//             <h1 className="leading-tight text-2xl">Thêm bệnh nhân</h1>
//           </div>
//           <button
//             className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
//             type="button">
//             Thêm
//           </button>
//         </section>
//         <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
//           <div className="flex-1 p-6">Thoai</div>
//         </div>
//         <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
//           <div className="flex-1 p-6">
//             <div className="bg-white flex  rounded-2xl flex-col dark:bg-slate-900/70">
//               <div className="flex-1">
//                 <div style={{ height: 380, width: '100%' }}>
//                   <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default Doctors;
