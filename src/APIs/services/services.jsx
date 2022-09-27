import { setServiceAction, addServiceAction, setLoading } from '../../redux/services/servicesAction';
import axios from 'axios';
import { toast } from 'react-toastify';

function fetchServices(){
    return (dispatch)=>{
        dispatch(setLoading(true));
        axios.get('http://localhost:9000/service')
        .then(res=>{
            dispatch(setLoading(false));
            dispatch(setServiceAction(res.data.result))
        })
        .catch(()=>dispatch(setLoading(false)))
    }
}


function addService(formData,handleClose){
    return (dispatch)=>{
        axios.post('http://localhost:9000/addService',
        formData, 
        {headers:{'content-type':'multipart/form-data'}}
      )
      .then((res)=>{
        dispatch(addServiceAction({title:'', sDesc:'', lDesc:'', file:''}));
        dispatch(fetchServices());
        handleClose();
        toast.success("Added successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch(()=>{
        toast.error("Some error occurred!", {
            position: toast.POSITION.TOP_RIGHT
        });
      })
    }
}

function editService(id, formData, handleClose){
    return (dispatch)=>{
        axios.patch(`http://localhost:9000/editService/${id}`,
            formData, 
            {headers:{'content-type':'multipart/form-data'}}
        )
        .then((res)=>{
            dispatch(fetchServices());
            toast.success("Updated successfully!", {
                position: toast.POSITION.TOP_RIGHT,
            });
            handleClose()
        })
        .catch(error=>{
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT,
            });
          })
    }
}

function deleteService(id, image){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteService/${id}`,{data:{'image':image}})
        .then(()=>{
            dispatch(fetchServices());
            toast.success("Deleted successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch(()=>{
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
}

export {fetchServices, addService, editService, deleteService};