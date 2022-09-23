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

function deleteService(id, image){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteService/${id}`,{data:{'image':image}})
        .then(()=>dispatch(fetchServices()))
    }
}

function addService(formData){
    return (dispatch)=>{
        axios.post('http://localhost:9000/addService',
        formData, 
        {headers:{'content-type':'multipart/form-data'}}
      )
      .then(()=>{
        dispatch(addServiceAction({title:'', sDesc:'', lDesc:'', file:''}));
        dispatch(fetchServices())
        return true
        // setStatus(res.data.success)
        // setFlag(true)
        // props.setDemo(res.data.demo)
      })
    //   .catch(error=>{
    //     // setStatus(error.response.data.success)
    //     // setFlag(true)
    //   })
    }
}

export {fetchServices, deleteService, addService};