import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import servicesReducer from "./services/servicesReducer";
import welcomeReducer from "./welcome/welcomeReducer";
import jobReducer from "./job/jobReducer";
import jobApplicantReducer from "./jobApplicant/jobApplicantReducer";

export const rootReducer = combineReducers({ authReducer, servicesReducer, welcomeReducer, jobReducer, jobApplicantReducer })

