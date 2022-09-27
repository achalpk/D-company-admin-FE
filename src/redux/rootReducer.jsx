import { combineReducers } from "redux";
import servicesReducer from "./services/servicesReducer";
import welcomeReducer from "./welcome/welcomeReducer";
import jobReducer from "./job/jobReducer";

export const rootReducer = combineReducers({ servicesReducer, welcomeReducer, jobReducer })

