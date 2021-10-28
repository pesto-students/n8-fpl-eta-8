import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    profileImage: "",
    uid: "",
    portfolios: []
  },
  reducers: {
    setUser: (state, action) => {
     Object.assign(state, action.payload);
    },
    setPortfolio: (state, action) => {
      Object.assign(state.portfolios, action.payload);
     },
  }
});

export const { setUser, setPortfolio } = user.actions;
export default user.reducers;
