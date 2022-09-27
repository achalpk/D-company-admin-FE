import { setWelcomeAction, addWelcomeAction, setWelcomeLoading } from '../../redux/welcome/welcomeAction';
import axios from 'axios';
import { toast } from 'react-toastify';

function fetchWelcome(){
    return (dispatch)=>{
        dispatch(setWelcomeLoading({show:true}));
        axios.get('http://localhost:9000/welcomes')
        .then(res=>{
            dispatch(setWelcomeLoading({show:false}));
            dispatch(setWelcomeAction(res.data.result))
        })
        .catch(()=>{
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setWelcomeLoading({show:false}))
        })
    }
}


function addWelcome(data,handleClose){
    return (dispatch)=>{
        dispatch(setWelcomeLoading({add:true}));
        axios.post('http://localhost:9000/addWelcome',
            {title:data.title, desc:data.desc}
        )
        .then((res)=>{
            dispatch(addWelcomeAction({title:'', desc:''}));
            dispatch(setWelcomeLoading({add:false}))
            dispatch(fetchWelcome());
            handleClose();
            toast.success("Added successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch(()=>{
            dispatch(setWelcomeLoading({add:false}))
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
}

function editWelcome(id, data, handleClose){
    return (dispatch)=>{
        dispatch(setWelcomeLoading({edit:true}));
        axios.patch(`http://localhost:9000/editWelcome/${id}`,
            {title:data.title, desc:data.desc}
        )
        .then((res)=>{
            dispatch(setWelcomeLoading({edit:false}))
            dispatch(fetchWelcome());
            toast.success("Updated successfully!", {
                position: toast.POSITION.TOP_RIGHT,
            });
            handleClose()
        })
        .catch(error=>{
            dispatch(setWelcomeLoading({edit:false}))
            toast.error("Some error occurred!", {
                position: toast.POSITION.TOP_RIGHT,
            });
          })
    }
}

function deleteWelcome(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteWelcome/${id}`)
        .then(()=>{
            dispatch(fetchWelcome());
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

export {fetchWelcome, addWelcome, editWelcome, deleteWelcome};