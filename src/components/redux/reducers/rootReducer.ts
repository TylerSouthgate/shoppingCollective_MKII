import {combineReducers} from 'redux';
//import filters from './dDataReducer.OLD';
import { authReducer } from "./authReducer";
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  auth : authReducer,
//  filters: filters,
  routing: routerReducer
});

export default rootReducer;