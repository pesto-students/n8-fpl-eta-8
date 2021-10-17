import { createSlice } from '@reduxjs/toolkit'

export const leaderboardView = createSlice({
    name: 'leaderboardView',
    initialState: {
        view:'notStarted'
    },
    reducers: {
        setLbView: (state, action) => {
            const { view } = action.payload;
            state.view = view;
        }
    },

});

export const { setLbView } =leaderboardView.actions
export default leaderboardView.reducers