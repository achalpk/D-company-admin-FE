import { authAction } from '../../redux/auth/authAction';
import axios from 'axios';

export function loginAPI(username, password, history){
    return (dispatch)=>{
        axios.post('http://localhost:9000/login', {
        username:username,
        password:password
    })
    .then((response) => {
        if(response.data.success){
        localStorage.setItem('Token', response.data.token);
        localStorage.setItem('isAuth','true');
        dispatch(authAction(true));
        history.push('/');
        }
    })
    .catch((Error)=>{
        console.log(Error.message);
    })
    }
}