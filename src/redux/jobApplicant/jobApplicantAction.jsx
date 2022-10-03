import {JobApplicantType, JobApplicantLoadingType} from './jobApplicantType';


export function setJobApplicantAction(jobApplicant){
    return { 
        type : JobApplicantType,
        payload : jobApplicant 
    };
}

export function setJobApplicantLoading(loading){
    return { 
        type : JobApplicantLoadingType,
        payload : loading 
    };
}
