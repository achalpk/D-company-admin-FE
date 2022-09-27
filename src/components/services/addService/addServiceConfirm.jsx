import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DialogBox({ status, setFlag, setOpenAdd }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    if(status){
        setOpenAdd(false)
    }
    setFlag(false)
    
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            {status ? <b>Service added successfully</b> : <b>Error occured :<br/> Please try again</b>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
