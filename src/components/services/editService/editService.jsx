import React, {useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';



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

export default function EditService(props) {
    const [status,setStatus] = useState(true);
    const [title,setTitle] = useState(props.editData.title);
    const [shortDesc,setSDesc] = useState(props.editData.short_desc);
    const [longDesc,setLDesc] = useState(props.editData.long_desc);
    const [file,setFile] = useState({name:props.editData.image});
    const [newTitle,setNewTitle] = useState('');
    const [newShortDesc,setNewSDesc] = useState('');
    const [newLongDesc,setNewLDesc] = useState('');
    const [newFile,setNewFile] = useState('');


    const [open, setOpen] = useState(true);

    const handleClose = () =>{ 
         setOpen(false);  
         props.setEditData(false);
    };

    const saveService = ()=>{

        const formData = new FormData();
        newTitle && formData.append('title',newTitle);
        newShortDesc && formData.append('shortDesc',newShortDesc);
        newLongDesc && formData.append('longDesc',newLongDesc);
        newFile && formData.append('serviceImage',newFile);
        props.editData.image && formData.append('oldImage',props.editData.image);

        axios.patch(`http://localhost:9000/editService/${props.editData.id}`,
            formData, 
            {headers:{'content-type':'multipart/form-data'}}
        )
        .then(res=>{
            setStatus(res.data.success)
            setOpen(false);
            props.setDemo(res.data.demo)
            props.setEditData(false);
        })
        .catch(error=>{
            setStatus(error.response.data.success)
        })
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
                    setNewTitle(e.target.value+' ');
                }}
            />
            <br/>
            <br/>
            <TextField
                name="short_desc"
                id="short_description"
                label="Short description"
                value={shortDesc}
                multiline
                fullWidth
                rows={2}
                onChange={(e)=>{
                    setSDesc(e.target.value);
                    setNewSDesc(e.target.value+' ');
                }}
            />
            <br/>
            <br/>
            <TextField
                name="long_desc"
                id="long_description"
                label="Long description"
                value={longDesc}
                multiline
                fullWidth
                rows={3}
                onChange={(e)=>{
                    setLDesc(e.target.value);
                    setNewLDesc(e.target.value+' ')
                }}
            />
            <br/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', margin:'auto', width:'600px' }}>
                <b style={{ marginRight: '100px'}}>Edit Image -</b> 
                {file.name ? <p style={{width:'100px', height:'50px', overflow:'hidden', wordBreak: 'break-word'}}>{file.name}</p> : <p>No image</p>}
                {file.name?<img src={`http://localhost:9000/${file.name}`} width='90' height='70'  alt={file.name}  />:null}
                <Button variant="contained" sx={{ ml: 10}} component="label" size="small">
                    Upload
                    <input hidden type="file" name="serviceImage" onChange={(e)=>{setFile(e.target.files[0]);setNewFile(e.target.files[0])}}/>
                </Button>
            </div>
            <Button
                variant="contained"
                sx={{ mt: 5}}
                color="success"
                onClick={saveService}
            >
                Save Changes
            </Button>
            {!status && <p>Error occured : Please try again</p>}
            {/* {flag? <DialogBox from="addService" status={status} setFlag={setFlag} setOpenAdd={setOpen}/> : null} */}
        </Box>
      </Modal>
    </div>
  );
}
