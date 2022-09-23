import { combineReducers } from "redux";
import servicesReducer from "./services/servicesReducer";

export const rootReducer = combineReducers({ servicesReducer })

