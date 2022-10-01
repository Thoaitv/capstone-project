// import React from 'react';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

// export default function DatePicker(props) {
//   const { name, label, value, onChange } = props;

//   const convertToDefEventPara = (name, value) => ({
//     target: {
//       name,
//       value,
//     },
//   });

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         disableToolbar
//         variant="inline"
//         inputVariant="outlined"
//         label={label}
//         format="MMM/dd/yyyy"
//         name={name}
//         value={value}
//         onChange={(date) => onChange(convertToDefEventPara(name, date))}
//       />
//     </MuiPickersUtilsProvider>
//   );
// }
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function BasicDateTimePicker(props) {
  // const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
      />
    </LocalizationProvider>
  );
}
