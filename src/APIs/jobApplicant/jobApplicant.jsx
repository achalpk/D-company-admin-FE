import { setJobApplicantAction, setJobApplicantLoading } from '../../redux/jobApplicant/jobApplicantAction';
import axios from 'axios';

function fetchJobApplicant(){
    return (dispatch)=>{
        dispatch(setJobApplicantLoading({show:true}));
        axios.get('http://localhost:9000/jobApplicant')
        .then(res=>{
            dispatch(setJobApplicantLoading({show:false}));
            dispatch(setJobApplicantAction(res.data.result))
        })
        .catch((error)=>{
            dispatch(setJobApplicantLoading({show:false}))
        })
    }
}

function deleteJobApplicant(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteJobApplicant/${id}`)
        .then((res)=>{
            dispatch(fetchJobApplicant());
        })
    }
}

export {fetchJobApplicant, deleteJobApplicant};