import React from 'react';
import { Button as MuiButton, makeStyles } from '@mui/material';

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  //   const classes = useStyles();

  //   const useStyles = makeStyles((theme) => ({
  //     root: {
  //       margin: theme.spacing(0.5),
  //     },
  //     label: {
  //       textTransform: 'none',
  //     },
  //   }));

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}>
      {text}
    </MuiButton>
  );
}
