import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import navReducer from './slices/navSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({ navReducer, authReducer });

export const store = configureStore({
    reducer: rootReducer
});
