import { setServiceAction, addServiceAction } from '../../redux/services/servicesAction';
import axios from 'axios';



function fetchServices(){
    return (dispatch)=>{
        axios.get('http://localhost:9000/service')
        .then(res=>{
            dispatch(setServiceAction(res.data.result))
        })
    }
}


function addService(formData, setStatus, setFlag){
    return (dispatch)=>{
        axios.post('http://localhost:9000/addService',
        formData, 
        {headers:{'content-type':'multipart/form-data'}}
      )
      .then((res)=>{
        setStatus(res.data.success);
        setFlag(true);
        dispatch(addServiceAction({title:'', sDesc:'', lDesc:'', file:''}));
        dispatch(fetchServices());
      })
      .catch(error=>{
        setStatus(error.response.data.success)
        setFlag(true)
      })
    }
}

function editService(id, formData, setStatus, setFlag){
    return (dispatch)=>{
        axios.patch(`http://localhost:9000/editService/${id}`,
            formData, 
            {headers:{'content-type':'multipart/form-data'}}
        )
        .then((res)=>{
            setStatus(res.data.success);
            setFlag(true);
            dispatch(fetchServices());
        })
        .catch(error=>{
            setStatus(error.response.data.success)
            setFlag(true)
          })
    }
}

function deleteService(id, image){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteService/${id}`,{data:{'image':image}})
        .then(()=>dispatch(fetchServices()))
    }
}

export {fetchServices, addService, editService, deleteService};