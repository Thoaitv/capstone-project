import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Input from '../../components/controls/Input';
import useForm, { Form } from '../../components/useForm';

const genderItems = [
  { id: 'male', title: 'Name' },
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

export default function EmployeeForm(props) {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      {/* <Grid container m={2} pt={3}> */}
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
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
          {/* <FormControl>
            <FormLabel>Giới tính</FormLabel>
            <RadioGroup row value={values.gender} onChange={handleInputChange}>
              <FormControlLabel value="male" control={<Radio />} label="Nam" />
              <FormControlLabel value="famle" control={<Radio />} label="Nữ" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Khác"
              />
            </RadioGroup>
          </FormControl> */}
          {/* <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          /> */}
        </Grid>
      </Grid>
    </Form>
  );
}
