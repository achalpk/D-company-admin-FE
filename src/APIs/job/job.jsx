import { setJobAction, addJobAction, setJobLoading } from '../../redux/job/jobAction';
import axios from 'axios';
import { toast } from 'react-toastify';

function fetchJob(){
    return (dispatch)=>{
        dispatch(setJobLoading({show:true}));
        axios.get('http://localhost:9000/jobs')
        .then(res=>{
            dispatch(setJobLoading({show:false}));
            dispatch(setJobAction(res.data.result))
        })
        .catch(()=>{
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setJobLoading({show:false}))
        })
    }
}

function addJob(data,handleClose){
    return (dispatch)=>{
        dispatch(setJobLoading({add:true}));
        axios.post('http://localhost:9000/addJob',
            {title:data.title, desc:data.desc, exp:data.exp, location:data.location}
        )
        .then((res)=>{
            dispatch(addJobAction({title:'', desc:'',  exp:'', location:''}));
            dispatch(setJobLoading({add:false}))
            dispatch(fetchJob());
            handleClose();
            toast.success("Added successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch(()=>{
            dispatch(setJobLoading({add:false}))
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
}

function deleteJob(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteJob/${id}`)
        .then(()=>{
            dispatch(fetchJob());
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

export {fetchJob, addJob, deleteJob};