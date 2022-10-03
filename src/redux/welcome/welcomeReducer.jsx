import { WelcomeType, AddWelcomeType, WelcomeLoadingType } from './welcomeType';


const initialState = { 
    welcome:[], 
    addWelcomeData:{title:'', desc:''}, 
    welcomeLoading:{show:false, add:false, edit:false} 
};

function welcomeReducer(state = initialState, action){
    switch(action.type){
        case WelcomeType:
            return {...state, welcome : action.payload};
        case AddWelcomeType:
            return {...state, addWelcomeData : action.payload};
        case WelcomeLoadingType:
            return {...state, welcomeLoading : action.payload};
        default :
            return state;
    }
}

export default welcomeReducer;