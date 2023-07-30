import { configureStore, combineReducers } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({ navReducer, authReducer });

export const store = configureStore({
reducer: {nav: navReducer, auth: authReducer}});
