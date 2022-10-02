import React from 'react';
import { Controls } from './controls/Controls';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         padding: theme.spacing(2),
//         position: 'absolute',
//         top: theme.spacing(5)
//     },
//     dialogTitle: {
//         paddingRight: '0px'
//     }
// }))

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  // const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      // classes={{ paper: classes.dialogWrapper }}
    >
      {/* <DialogTitle className={classes.dialogTitle}> */}
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          {/* <Typography variant="h6" component="div" style={{ flexGrow: 1 }}> */}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Controls.ActionButton
            color="success"
            onClick={() => {
              setOpenPopup(false);
            }}>
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
