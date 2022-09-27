import {WelcomeType, AddWelcomeType, WelcomeLoadingType} from './welcomeType';


export function setWelcomeAction(welcome){
    return { 
        type : WelcomeType,
        payload : welcome 
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
