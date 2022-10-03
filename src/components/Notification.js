import Alert from '@mui/material/Alert';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Snackbar, Stack } from '@mui/material';

export default function Notification(props) {
  const { notify, setNotify } = props;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}>
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={notify.type || 'success'}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
