import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
    name: 'fav',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter((item) => {
                item.id !== action.payload;
            });
        }
    }
});

export const { addFavorite, removeFavorite } = favSlice.actions;

export const getFavorites = (state) => state.fav;

export default favSlice.reducer;
