import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "--", age: 0, years: [2012, 2015, 2019] } },
  reducers: {
    login: (state, action) => {
      // every function in the reducer takes in state(the initial state), and action
      state.value = { ...state, name: "Eniola", age: 20, years: ["2005"] };
    },
    login2: (state, action) => {
      state.value = { ...state, ...action.payload };
    },
  },
});

// export the actions
export const { login, login2 } = userSlice.actions;

// export the reducer
export default userSlice.reducer;
