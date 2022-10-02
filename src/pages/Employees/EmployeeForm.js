import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Controls } from '../../components/controls/Controls';
import useForm, { Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFValues = {
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

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'Tên không được để trống';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 1
          ? ''
          : 'Số điện thoại phải có ít nhất 10 số';
    if ('city' in fieldValues)
      temp.city = fieldValues.city ? '' : 'Địa chỉ không được để trống';

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     addOrEdit(values, resetForm);
  //     employeeService.insertEmployee(values);
  //     resetForm();
  //   }
  // };

  // OKe;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     employeeService.insertEmployee(values);
  //     resetForm();
  //   }
  // };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
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

          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button
              type="button"
              text="Reset"
              color="error"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
