import { createSlice } from '@reduxjs/toolkit';

const userState = {
    name: null,
    phoneNumber: null,
    vehicle: null,
    type: null,
    fireToken: null
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
        }
    }
});

export const { setUsername, setPhoneNumber, setVehicleNumber, setType } = authSlice.actions;

export const selectName = (state) => state.auth.name;
export const selecPhoneNumber = (state) => state.auth.phoneNumber;
export const selectVehicle = (state) => state.auth.vehicle;
export const selectType = (state) => state.auth.type;

export default authSlice.reducer;
