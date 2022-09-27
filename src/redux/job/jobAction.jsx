import {JobType, AddJobType, JobLoadingType} from './jobType';


export function setJobAction(job){
    return { 
        type : JobType,
        payload : job 
    };
}

export function addJobAction(addData){
    return { 
        type : AddJobType,
        payload : addData
    };
}

export function setJobLoading(loading){
    return { 
        type : JobLoadingType,
        payload : loading 
    };
}
