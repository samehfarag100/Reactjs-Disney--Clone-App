import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogoutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setUserLogoutState } = userSlice.actions;
export const userNameSelector = (state) => state.user.name;
export const emailSelector = (state) => state.user.email;
export const photoSelector = (state) => state.user.photo;
export default userSlice.reducer;
