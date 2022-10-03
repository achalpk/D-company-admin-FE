import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJobAction } from '../../../redux/job/jobAction';
import { addJob } from '../../../APIs/job/job';
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

export default function AddJob() {
  const data = useSelector((state)=>state.jobReducer.addJobData);
  const loading = useSelector((state)=>state.jobReducer.jobLoading);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveJob = async ()=>{
    dispatch(addJob(data,handleClose))
  }

  return (
    <div>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>Add Job</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>Add Job</h1>
            <TextField
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={(e)=>dispatch(addJobAction({...data,title:e.target.value}))}
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
                onChange={(e)=>dispatch(addJobAction({...data,desc:e.target.value}))}
            />
            <br/>
            <br/>
            <TextField
                name="exp"
                id="experience"
                label="Experience"
                multiline
                fullWidth
                onChange={(e)=>dispatch(addJobAction({...data,exp:e.target.value}))}
            />
            <br/>
            <br/>
            <TextField
                name="location"
                id="location"
                label="Location"
                multiline
                fullWidth
                onChange={(e)=>dispatch(addJobAction({...data,location:e.target.value}))}
            />
            <br/>
            <Button
              variant="contained"
              sx={{ mt: 3}}
              onClick={saveJob}
            >
              Save &nbsp; {loading.add ?<CircularProgress size="18px" sx={{color:'black'}}/> : null}
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
