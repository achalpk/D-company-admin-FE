import {AuthType} from './authType';


export function authAction(auth){
    return { 
        type : AuthType,
        payload : auth 
    };
}
