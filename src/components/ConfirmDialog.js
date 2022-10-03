import React from 'react';

import { Controls } from './controls/Controls';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: '3px',
    position: 'absolute',
    top: '5px',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  dialogContent: {
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'space-around',
  },
  titleIcon: {
    backgroundColor: theme.light,
    color: theme.main,
    '&:hover': {
      backgroundColor: theme.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();

  return (
    // <Dialog open={confirmDialog.isOpen}>
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      {/* <DialogTitle> */}
      <DialogTitle className={classes.dialogTitle}>
        {/* <IconButton> */}
        <IconButton disableRipple className={classes.titleIcon}>
          <CircleNotificationsIcon style={{ color: 'red' }} />
        </IconButton>
      </DialogTitle>
      {/* <DialogContent> */}
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      {/* <DialogActions> */}
      <DialogActions className={classes.dialogAction}>
        <Controls.Button
          text="No"
          color="error"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Controls.Button
          text="Yes"
          color="success"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}
