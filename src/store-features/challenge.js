import { createSlice } from '@reduxjs/toolkit'

export const challenge = createSlice({
    name: 'challenge',
    initialState: {
        id: null,
        name: null,
        startDate: null,
        endDate: null,
        status: null,
        rules: null,
        awards: null,
        lbView: null,
        leaderboard:null,
    },
    reducers: {
        setChallengeToStore: (state, action) => {
            const { name, startDate, endDate, status, rules, leaderboard } = action.payload;
            state.name = name;
            state.startDate = startDate;
            state.endDate = endDate;
            state.rules = rules;
            state.leaderboard = leaderboard;
            switch (status) {
                case 'NOT_LIVE': state.lbView = "notStarted"; break;
                case 'LIVE': state.lbView = "leaderboard"; break;
                case 'CLOSED': state.lbView = "claimRewards"; break;
                // error boundry
                default:
                    state.lbView = "notStarted";
            }
            return state;
        },
        updateLbView: (state, action) => {
          state.lbView = action.payload;
        }
    }
});


export const { setChallengeToStore, updateLbView } = challenge.actions
export default challenge.reducers