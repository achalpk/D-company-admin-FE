import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function EditDialogBox({ status, setFlag, handleCloseEdit }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    if(status){
        handleCloseEdit()
    }
    setFlag(false)
    
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            {status ? <b>Service edited successfully</b> : <b>Error occured <br/> Please try again</b>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
