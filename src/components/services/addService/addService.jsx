import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addServiceAction } from '../../../redux/services/servicesAction';
import { addService } from '../../../APIs/services/services';
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

export default function AddService() {
  const data = useSelector((state)=>state.servicesReducer.addData);
  const loading = useSelector((state)=>state.servicesReducer.loading);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveService = async ()=>{
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('sDesc',data.sDesc);
    formData.append('lDesc',data.lDesc);
    formData.append('serviceImage',data.file);

    dispatch(addService(formData,handleClose))
  }



  return (
    <div>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>Add Service</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>Add Service</h1>
            <TextField
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={(e)=>dispatch(addServiceAction({...data,title:e.target.value}))}
            />
            <br/>
            <br/>
            <TextField
                name="short_desc"
                id="short_description"
                label="Short description"
                multiline
                fullWidth
                rows={2}
                onChange={(e)=>dispatch(addServiceAction({...data,sDesc:e.target.value}))}
            />
            <br/>
            <br/>
            <TextField
                name="long_desc"
                id="long_description"
                label="Long description"
                multiline
                fullWidth
                rows={5}
                onChange={(e)=>dispatch(addServiceAction({...data,lDesc:e.target.value}))}
            />
            <br/>
            <br/>
            <b>Upload image :</b>           
            <Button variant="contained" color="success" component="label">
                Upload
                <input hidden type="file" name="serviceImage" onChange={(e)=>dispatch(addServiceAction({...data,file:e.target.files[0]}))}/>
            </Button>
            <br/>

            <Button
              variant="contained"
              sx={{ mt: 3}}
              onClick={saveService}
            >
              Save &nbsp; {loading.add ?<CircularProgress size="18px" sx={{color:'black'}}/> : null}
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
