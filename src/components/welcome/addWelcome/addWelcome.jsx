import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWelcomeAction } from '../../../redux/welcome/welcomeAction';
import { addWelcome } from '../../../APIs/welcome/welcome';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: 2,
};

export default function AddWelcome() {
  const data = useSelector((state)=>state.welcomeReducer.addWelcomeData);
  const loading = useSelector((state)=>state.welcomeReducer.welcomeLoading);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveWelcome = async ()=>{
    dispatch(addWelcome(data,handleClose))
  }



  return (
    <div>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>Add Welcome Content</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>Add Welcome Content</h1>
            <TextField
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={(e)=>dispatch(addWelcomeAction({...data,title:e.target.value}))}
            />
            <br/>
            <br/>
            <TextField
                name="desc"
                id="description"
                label="Description"
                multiline
                fullWidth
                rows={5}
                onChange={(e)=>dispatch(addWelcomeAction({...data,desc:e.target.value}))}
            />
            <br/>
            <br/>

            <Button
              variant="contained"
              sx={{ mt: 3}}
              onClick={saveWelcome}
            >
              Save &nbsp; {loading.add ?<CircularProgress size="18px" sx={{color:'black'}}/> : null}
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
