import { JobApplicantType, JobApplicantLoadingType } from './jobApplicantType';


const initialState = { 
    jobApplicant:[], 
    jobApplicantLoading:{show:false} 
};

function jobApplicantReducer(state = initialState, action){
    switch(action.type){
        case JobApplicantType:
            return {...state, jobApplicant : action.payload};
        case JobApplicantLoadingType:
            return {...state, jobApplicantLoading : action.payload};
        default :
            return state;
    }
}

export default jobApplicantReducer;