import { TableBody, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Fragment, useState } from 'react';
import useTable from '../../components/useTable';
import EmployeeForm from './EmployeeForm';
import * as employeeService from '../../services/employeeService';
export default function Employees() {
  const { TblContainer } = useTable();
  const [records, setRecords] = useState(employeeService.getAllEmployees());

  return (
    <Fragment>
      <section className="p-6 xl:max-w-6xl xl:mx-auto">
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
            <h1 className="leading-tight text-2xl">Thêm bệnh nhân</h1>
          </div>
          <button
            className="inline-flex  justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-blue-600 text-white dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
            type="button">
            Thêm mới
          </button>
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <div className="m-3">
            <EmployeeForm />
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
                  d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"></path>
              </svg>
            </span>
            <h1 className="leading-tight text-2xl">Danh sách bệnh nhân</h1>
          </div>
          {/* <button
            className="inline-flex  justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-blue-600 text-white dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
            type="button">
            Thêm mới
          </button> */}
        </section>
        <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
          <div className="m-3">
            <TblContainer>
              <TableBody>
                {records.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>
                      {(item.gender = 'male' ? 'Nam' : 'Nữ')}
                    </TableCell>
                    <TableCell>{item.hireDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
