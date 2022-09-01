import { combineReducers } from "redux"; 
import userReducer from "./userReducer"; 

const rootReducer = combineReducers({ 
  userred: userReducer, 
});

export default rootReducer;