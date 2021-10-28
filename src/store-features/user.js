import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    profileImage: "",
    uid:"",
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
      console.log(`State Update ${JSON.stringify(state, 2, 2)}`);
    },
    resetUser: (state) => {
      state.email = "";
      state.name = "";
      state.profileImage = "";
    },
  },
});

export const { setUser, resetUser } = user.actions;
export default user.reducers;
