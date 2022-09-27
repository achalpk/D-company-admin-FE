import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editWelcome } from '../../../APIs/welcome/welcome';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
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

export default function EditWelcome({editData, setEditData}) {
    const loading = useSelector((state)=>state.welcomeReducer.welcomeLoading);
    const dispatch = useDispatch();
    const [title,setTitle] = useState(editData.title);
    const [desc,setDesc] = useState(editData.desc);



    const [open, setOpen] = useState(true);

    const handleClose = () =>{ 
         setOpen(false);  
         setEditData(false);
    };

    const saveWelcome = ()=>{
        const data = {'title':title, 'desc':desc};
        dispatch(editWelcome(editData.id, data, handleClose));
    }


  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2>Edit Service</h2>
                <TextField
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    value={title}
                    autoFocus
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <br/>
                <br/>
                <TextField
                    name="short_desc"
                    id="short_description"
                    label="Short description"
                    value={desc}
                    multiline
                    fullWidth
                    rows={2}
                    onChange={(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <br/>
                <br/>

                <Button
                    variant="contained"
                    sx={{ mt: 5}}
                    color="success"
                    onClick={saveWelcome}
                >
                    Save Changes &nbsp; {loading.edit ?<CircularProgress size="18px" sx={{color:'black'}}/> : null}
                </Button>
            </Box>
        </Modal>
    </div>
  );
}
