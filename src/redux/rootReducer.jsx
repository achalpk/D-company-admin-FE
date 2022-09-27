import { combineReducers } from "redux";
import servicesReducer from "./services/servicesReducer";
import welcomeReducer from "./welcome/welcomeReducer";

export const rootReducer = combineReducers({ servicesReducer, welcomeReducer })

