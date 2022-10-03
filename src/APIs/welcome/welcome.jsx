import { setWelcomeAction, addWelcomeAction, setWelcomeLoading } from '../../redux/welcome/welcomeAction';
import axios from 'axios';

function fetchWelcome(){
    return (dispatch)=>{
        dispatch(setWelcomeLoading({show:true}));
        axios.get('http://localhost:9000/welcomes')
        .then(res=>{
            dispatch(setWelcomeLoading({show:false}));
            dispatch(setWelcomeAction(res.data.result))
        })
        .catch((error)=>{
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
        })
        .catch((error)=>{
            dispatch(setWelcomeLoading({add:false}))
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
            handleClose()
        })
        .catch(error=>{
            dispatch(setWelcomeLoading({edit:false}))
          })
    }
}

function deleteWelcome(id){
    return (dispatch)=>{
        axios.delete(`http://localhost:9000/deleteWelcome/${id}`)
        .then((res)=>{
            dispatch(fetchWelcome());
        })
    }
}

export {fetchWelcome, addWelcome, editWelcome, deleteWelcome};