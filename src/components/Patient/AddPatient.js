// import * as React from 'react';
// import Button from '@mui/material/Button';

// import Popup from '../Popup/Popup';

// export default function AddPatient() {
//   const [openPopup, setOpenPopup] = React.useState(false);

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={() => setOpenPopup(true)}>
//         Thêm bệnh nhân mới
//       </Button>
//       <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
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

export default function AddPatient(props) {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained">
        Thêm bệnh nhân
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          Nhập thông tin bệnh nhân
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={6}>
              <div className="mt-5">
                <Controls.Input
                  variant="outlined"
                  name="fullName"
                  label="Họ và tên"
                  // value={values.fullName}
                  // onChange={handleInputChange}
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

              <Controls.Button type="submit" text="Thêm" size="large" />
            </Grid>
          </Grid>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
