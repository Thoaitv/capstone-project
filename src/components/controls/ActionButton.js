import React from 'react';
// import Button from './Button';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: '3px',
  },
  secondary: {
    backgroundColor: 'light',
    '& .MuiButton-label': {
      color: 'main',
    },
  },
  primary: {
    backgroundColor: 'light',
    '& .MuiButton-label': {
      color: 'thememain',
    },
  },
}));

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}
