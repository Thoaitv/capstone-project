import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Controls } from '../../components/controls/Controls';
import useForm, { Form } from '../../components/useForm';
// import * as patientService from '../../services/patientService';

const genderItems = [
  { id: 'male', title: 'Nam' },
  { id: 'female', title: 'Nữ' },
  { id: 'other', title: 'Khác' },
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

export default function StaffForm(props) {
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
  // OKe;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container className="flex justify-between">
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Họ và tên"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.Input
            label="Số điện thoại"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="Là"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="Đại chỉ"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6} className=" flex flex-col justify-end flex-wrap">
          <Controls.RadioGroup
            name="gender"
            label="Giới tính"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Sinh nhật"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button
              type="submit"
              text="Thêm"
              style={{ marginRight: '10px' }}
            />
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
