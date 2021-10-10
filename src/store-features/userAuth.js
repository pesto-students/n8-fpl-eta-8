import { createSlice } from '@reduxjs/toolkit'

export const userAuth = createSlice({
    name: 'userAuth',
    initialState: {
        email: '',
        authData: '',
        profileImage: ''
    },
    reducers: {
    auth: (state, action) => {
        const {email, authData, profileImage} = action.payload;
        state.email = email;
        state.authData = authData;
        state.profileImage = profileImage;
        }
    }
});

export const {auth} = userAuth.actions
export default userAuth.reducers