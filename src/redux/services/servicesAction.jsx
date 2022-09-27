import {ServicesType, AddServicesType, LoadingType} from './servicesType';


export function setServiceAction(services){
    return { 
        type : ServicesType,
        payload : services 
    };
}

export function addServiceAction(addData){
    return { 
        type : AddServicesType,
        payload : addData
    };
}

export function setLoading(loading){
    return { 
        type : LoadingType,
        payload : loading 
    };
}
