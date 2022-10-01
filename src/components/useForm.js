// import { makeStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

// const useForm = (initialValues) => {
//   const [values, setValues] = useState(initialValues);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };
//   return {
//     values,
//     setValues,
//     handleInputChange,
//   };
// };

// export default useForm;

// export function Form(props) {
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiFormControl-root': {
//         width: '80%',
//         margin: '5px',
//       },
//     },
//   }));
//   const classes = useStyles();

//   return (

//     <form autoComplete="off">{props.children}</form>
//   );
// }

export default function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: '5px',
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
