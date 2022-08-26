import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSet: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { userSet } = userSlice.actions;
export default userSlice.reducer;
