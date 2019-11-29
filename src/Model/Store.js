import { createStore, applyMiddleware } from "redux";
import AppReducer from './AppReducer';
import thunk from 'redux-thunk';
 
//to store app data and get data from the server
const store=createStore(AppReducer, applyMiddleware(thunk));

export default store;