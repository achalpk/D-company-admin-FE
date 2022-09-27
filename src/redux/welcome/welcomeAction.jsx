import {WelcomeType, AddWelcomeType, WelcomeLoadingType} from './welcomeType';


export function setWelcomeAction(services){
    return { 
        type : WelcomeType,
        payload : services 
    };
}

export function addWelcomeAction(addData){
    return { 
        type : AddWelcomeType,
        payload : addData
    };
}

export function setWelcomeLoading(loading){
    return { 
        type : WelcomeLoadingType,
        payload : loading 
    };
}
