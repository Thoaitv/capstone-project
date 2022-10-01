import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField, Typography } from '@mui/material';
import { Controls } from '../controls/Controls';
import useForm from '../useForm';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

// const useStyles = makeStyles((theme) => ({
//   dialogWrapper: {
//     padding: theme.spacing(2),
//     position: 'absolute',
//     top: theme.spacing(5),
//   },
//   dialogTitle: {
//     paddingRight: '0px',
//   },
// }));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  //   const classes = useStyles();
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
  const { values, setValues, handleInputChange } = useForm(initialValues);

  const genderItems = [
    { id: 'male', title: 'Nam' },
    { id: 'female', title: 'Nữ' },
    { id: 'other', title: 'Khác' },
  ];

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>Thêm bệnh nhân mới</div>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <div className="mt-5">
              <Controls.Input
                variant="outlined"
                name="fullName"
                label="Họ và tên"
                value={values.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <TextField
                variant="outlined"
                label="Số điện thoại"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <TextField
                variant="outlined"
                label="Địa chỉ"
                name="city"
                value={values.city}
                onChange={handleInputChange}
              />
            </div>
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

            <Controls.CheckBox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            <div className="my-3">
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <Controls.Button type="submit" text="Thêm" size="small" />
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
