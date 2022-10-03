import { setJobAction, addJobAction, setJobLoading } from '../../redux/job/jobAction';
import axios from 'axios';

function fetchJob(){
    return (dispatch)=>{
        dispatch(setJobLoading({show:true}));
        axios.get('http://localhost:9000/jobs')
        .then(res=>{
            dispatch(setJobLoading({show:false}));
            dispatch(setJobAction(res.data.result))
        })
        .catch((error)=>{
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
        })
        .catch((error)=>{
            dispatch(setJobLoading({add:false}))

        })
    }
}

function deleteJob(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteJob/${id}`)
        .then((res)=>{
            dispatch(fetchJob());
        })
    }
}

export {fetchJob, addJob, deleteJob};