import { combineReducers } from 'redux';
import searchApiReducer from './searchApiReducer';



export default combineReducers({
    data: searchApiReducer
});