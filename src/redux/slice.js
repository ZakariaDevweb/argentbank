import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        userName: null,
        firstName: null,
        lastName: null,
        nickname: null
    },
    reducers: {

        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.userName = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.nickname = action.payload.nickname;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.userName = null;
            state.firstName = null;
            state.lastName = null;
            state.nickname = null;
        },
        setNickname: (state, action) => {
            state.nickname = action.payload;
        },

    },
});

export const { signIn, signOut, setNickname } = userSlice.actions;
export default userSlice.reducer;