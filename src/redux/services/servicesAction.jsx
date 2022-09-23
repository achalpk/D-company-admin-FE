import {ServicesType,AddServicesType} from './servicesType';


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



// export function setError(error){
//     return { 
//         type : ErrorType,
//         payload : error 
//     };
// }
