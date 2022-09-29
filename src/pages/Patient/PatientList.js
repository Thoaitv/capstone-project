import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ListPatient from '../../components/Patient/ListPatient';

const PatientList = () => {
  return (
    <div className=" overflow-hidden lg:overflow-visible">
      <div className="xl:pl-60  pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <ListPatient />
      </div>
    </div>
  );
};

export default PatientList;
