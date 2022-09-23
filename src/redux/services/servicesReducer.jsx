import { ServicesType, AddServicesType } from './servicesType';


const initialState = { services:[], addData:{title:'', sDesc:'', lDesc:'', file:''} };

function servicesReducer(state = initialState, action){
    switch(action.type){
        case ServicesType:
            return {...state, services : action.payload};
        case AddServicesType:
            return {...state, addData : action.payload};
        default :
            return state;
    }
}

export default servicesReducer