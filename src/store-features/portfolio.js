import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    challengeId: null,
    stocks: [],
    submitTimestamp: null,
    uid: null,
    username: null,
    analysingStock: null,
}

export const portfolio = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setPortfolio: (state, action) => {
            const { id, challengeId, submitTimestamp, uid, username } = action.payload;
            state.id = id;
            state.challengeId = challengeId;
            state.submitTimestamp = submitTimestamp;
            state.uid = uid;
            state.username = username;

            return state;
        },
        addStock: (state, action) => {
            state.stocks.push(action.payload);
            console.log(JSON.stringify(state));
        },
        removeStock: (state, action) => {
            const st = state.stocks;
            let s = st.length;
            while (s--) {
                if (st[s].symbol === action.payload.symbol) {
                    console.log(`found the stock`)
                    st.splice(s, 1);
                    break;
                }
            }
            state.stocks = st;
            console.log(JSON.stringify(state));
        },
        analysingStock: (state, action) => {
            state.analysingStock = action.payload;
        },
        resetPortfolio: state => initialState
    }
});


export const { setPortfolio, addStock, removeStock, analysingStock, resetPortfolio } = portfolio.actions
export default portfolio.reducers