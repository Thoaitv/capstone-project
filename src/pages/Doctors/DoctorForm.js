import { Grid, TextField } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { Controls } from '../../components/controls/Controls';
import DataPicker from '../../components/controls/DataPicker';
import useForm, { Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const DoctorForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <section className="p-6">
      <Form />
      {/* <form className={classes.root}> */}
      <Grid container>
        <Grid item xs={6}>
          {/* <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value="Họ Và Tên"
            onChange={handleInputChange}
          /> */}
          <Controls.Input
            variant="outlined"
            name="fullName"
            label="Họ và tên"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />

          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          {/* <DataPicker /> */}
          {/* <Controls.DataPicker
            label="hireDate"
            name="Hire Date"
            value={values.isPermanent}
            onChange={handleInputChange}
          /> */}
          <div>
            <Controls.Button type="submit" text="Nộp bài" />
            <Controls.Button
              type="button"
              text="Reset"
              color="secondary"
              size="small"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default DoctorForm;
