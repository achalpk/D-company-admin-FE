import { setServiceAction, addServiceAction, setLoading } from '../../redux/services/servicesAction';
import axios from 'axios';

function fetchServices(){
    return (dispatch)=>{
        dispatch(setLoading({show:true}));
        axios.get('http://localhost:9000/service')
        .then(res=>{
            dispatch(setLoading({show:false}));
            dispatch(setServiceAction(res.data.result))
        })
        .catch((error)=>{
            dispatch(setLoading({show:false}))
        })
    }
}


function addService(formData,handleClose){
    return (dispatch)=>{
        dispatch(setLoading({add:true}));
        axios.post('http://localhost:9000/addService',
        formData, 
        {headers:{'content-type':'multipart/form-data'}}
        )
        .then((res)=>{
            dispatch(addServiceAction({title:'', sDesc:'', lDesc:'', file:''}));
            dispatch(setLoading({add:false}))
            dispatch(fetchServices());
            handleClose();
        })
        .catch((error)=>{
            dispatch(setLoading({add:false}))
        })
    }
}

function editService(id, formData, handleClose){
    return (dispatch)=>{
        dispatch(setLoading({edit:true}));
        axios.patch(`http://localhost:9000/editService/${id}`,
            formData, 
            {headers:{'content-type':'multipart/form-data'}}
        )
        .then((res)=>{
            dispatch(setLoading({edit:false}))
            dispatch(fetchServices());
            handleClose()
        })
        .catch(error=>{
            dispatch(setLoading({edit:false}))
          })
    }
}

function deleteService(id, image){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteService/${id}`,{data:{'image':image}})
        .then((res)=>{
            dispatch(fetchServices());
        })
    }
}

export {fetchServices, addService, editService, deleteService};