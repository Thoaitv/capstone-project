import React from 'react';
import { Controls } from './controls/Controls';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: '6px',
    position: 'absolute',
    top: '3px',
  },
  dialogTitle: {
    paddingRight: '3px',
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        {/* <DialogTitle> */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div">
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
      <DialogContent dividers className="mb-7">
        {children}
      </DialogContent>
    </Dialog>
  );
}
