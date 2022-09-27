import { ServicesType, AddServicesType, LoadingType } from './servicesType';


const initialState = { 
    services:[], 
    addData:{title:'', sDesc:'', lDesc:'', file:''}, 
    loading:{show:false, add:false, edit:false} 
};

function servicesReducer(state = initialState, action){
    switch(action.type){
        case ServicesType:
            return {...state, services : action.payload};
        case AddServicesType:
            return {...state, addData : action.payload};
        case LoadingType:
            return {...state, loading : action.payload};
        default :
            return state;
    }
}

export default servicesReducer