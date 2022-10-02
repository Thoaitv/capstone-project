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

// const useStyles = makeStyles((theme) => ({
//   dialog: {
//     padding: theme.spacing(2),
//     position: 'absolute',
//     top: theme.spacing(5),
//   },
//   dialogTitle: {
//     textAlign: 'center',
//   },
//   dialogContent: {
//     textAlign: 'center',
//   },
//   dialogAction: {
//     justifyContent: 'center',
//   },
//   titleIcon: {
//     backgroundColor: theme.palette.secondary.light,
//     color: theme.palette.secondary.main,
//     '&:hover': {
//       backgroundColor: theme.palette.secondary.light,
//       cursor: 'default',
//     },
//     '& .MuiSvgIcon-root': {
//       fontSize: '8rem',
//     },
//   },
// }));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  // const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen}>
      {/* <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}> */}
      <DialogTitle>
        {/* <DialogTitle className={classes.dialogTitle}> */}
        <IconButton>
          {/* <IconButton disableRipple className={classes.titleIcon}> */}
          <CircleNotificationsIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {/* <DialogContent className={classes.dialogContent}> */}
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        {/* <DialogActions className={classes.dialogAction}> */}
        <Controls.Button
          text="No"
          color="success"
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
