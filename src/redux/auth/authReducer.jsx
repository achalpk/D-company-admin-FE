import { AuthType } from './authType';

const initialState = { 
    auth:false,
};

function authReducer(state = initialState, action){
    switch(action.type){
        case AuthType:
            return {...state, auth : action.payload};
        default :
            return state;
    }
}

export default authReducer;