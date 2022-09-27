import { JobType, AddJobType, JobLoadingType } from './jobType';


const initialState = { 
    job:[], 
    addJobData:{title:'', desc:'', exp:'', location:''}, 
    jobLoading:{show:false, add:false} 
};

function jobReducer(state = initialState, action){
    switch(action.type){
        case JobType:
            return {...state, job : action.payload};
        case AddJobType:
            return {...state, addJobData : action.payload};
        case JobLoadingType:
            return {...state, jobLoading : action.payload};
        default :
            return state;
    }
}

export default jobReducer;