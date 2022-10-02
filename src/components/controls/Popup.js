import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import { Controls } from './Controls';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    // <Dialog open={openPopup} maxWidth="md">
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div className="flex justify-between">
          <Typography variant="h4" component="div">
            {title}
          </Typography>

          <ThemeProvider theme={theme}>
            <Controls.Button
              color="neutral"
              text="X"
              onClick={() => setOpenPopup(false)}></Controls.Button>
          </ThemeProvider>
        </div>
      </DialogTitle>
      {/* <hr /> */}
      <DialogContent>
        <hr className="mb-10" />

        {children}
        {/* <Grid container>
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
        </Grid> */}
        <hr className="mt-10" />
      </DialogContent>
    </Dialog>
  );
}
