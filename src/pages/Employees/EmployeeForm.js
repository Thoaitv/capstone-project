import { Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import Input from '../../components/controls/Input';
import { Controls } from '../../components/controls/Controls';
import useForm, { Form } from '../../components/useForm';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';

const genderItems = [
  { id: 'male', title: 'Nam' },
  { id: 'female', title: 'Nữ' },
  { id: 'other', title: 'Khác' },
];

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

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'Tên không được để trống';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9
          ? ''
          : 'Số điện thoại phải có ít nhất 10 số';
    if ('city' in fieldValues)
      temp.city = fieldValues.city ? '' : 'Địa chỉ không được để trống';

    setErrors({
      ...temp,
    });

    if (fieldValues == values)
      return Object.values(temp).every((x) => x === '');
  };

  const { values, setValues, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // addOrEdit(values, resetForm);
      employeeService.insertEmployee(values);
      resetForm();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {/* <Grid container m={2} pt={3}> */}
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            variant="outlined"
            name="fullName"
            label="Họ và tên"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            variant="outlined"
            label="Số điện thoại"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            variant="outlined"
            label="Địa chỉ"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Giới tính"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          {/* <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          /> */}
          {/* <Controls.Checkbox
            name="isPermanent"
            label="Gì đó"
            value={values.isPermanent}
            onChange={handleInputChange}
          /> */}
          <Controls.DatePicker
            name="hireDate"
            label="Sinh nhật"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <div className="mt-5 flex gap-5">
            <Controls.Button type="submit" text="Submit" />
            {/* <Controls.Button type="button" text="Reset" color="error" /> */}
            <Controls.Button text="Reset" color="error" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
