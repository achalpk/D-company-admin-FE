import { setJobApplicantAction, setJobApplicantLoading } from '../../redux/jobApplicant/jobApplicantAction';
import { authAction } from '../../redux/auth/authAction';
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
            if(error.response.data.noToken){
                localStorage.removeItem('Token');
                localStorage.removeItem('isAuth');
                dispatch(authAction(false));
            }
            else{
                dispatch(setJobApplicantLoading({show:false}));
            }
        })
    }
}

function deleteJobApplicant(id, resume){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteJobApplicant/${id}`,{data:{'resume':resume}})
        .then((res)=>{
            dispatch(fetchJobApplicant());
        })
        .catch((error)=>{
            if(error.response.data.noToken){
                localStorage.removeItem('Token');
                localStorage.removeItem('isAuth');
                dispatch(authAction(false));
            }
        })
    }
}

export {fetchJobApplicant, deleteJobApplicant};