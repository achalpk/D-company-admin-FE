import { setJobApplicantAction, setJobApplicantLoading } from '../../redux/jobApplicant/jobApplicantAction';
import axios from 'axios';
import { toast } from 'react-toastify';

function fetchJobApplicant(){
    return (dispatch)=>{
        dispatch(setJobApplicantLoading({show:true}));
        axios.get('http://localhost:9000/jobApplicant')
        .then(res=>{
            dispatch(setJobApplicantLoading({show:false}));
            dispatch(setJobApplicantAction(res.data.result))
        })
        .catch(()=>{
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setJobApplicantLoading({show:false}))
        })
    }
}

function deleteJobApplicant(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteJobApplicant/${id}`)
        .then(()=>{
            dispatch(fetchJobApplicant());
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

export {fetchJobApplicant, deleteJobApplicant};