import { createSlice } from '@reduxjs/toolkit';

const userState = {
    id: null,
    name: null,
    phoneNumber: null,
    vehicle: null,
    type: null,
    fcmToken: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: userState,
    reducers: {
        setUsername: (state, action) => { 
            state.name = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setVehicleNumber: (state, action) => {
            state.vehicle = action.payload;
        },
        setType: (state, action)=>{
            state.type = action.payload;
        },
        setFCM:(state, action)=>{
            state.fcmToken = action.payload
        },
        setID:(state, action)=>{
            state.id = action.payload
        },
    }
});

export const { setUsername, setPhoneNumber, setVehicleNumber, setType, setFCM, setID } = authSlice.actions;

export const selectName = (state) => state.auth.name;
export const selecPhoneNumber = (state) => state.auth.phoneNumber;
export const selectVehicle = (state) => state.auth.vehicle;
export const selectType = (state) => state.auth.type;
export const selectFCM = (state) => state.auth.fcmToken
export const selectAll = (state) => state.auth;
export const selectID = (state) => state.auth;

export default authSlice.reducer;
