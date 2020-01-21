
import EmployeeReducer from './EmployeeReducer';
import LoginReducer from './LoginReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    LoginReducer,
    EmployeeReducer
})