import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "green" },
  reducers: {
    changeColor: (state, action) => {
      if (state.value === "green") {
        state.value = "red";
      } else {
        state.value = "green";
      }
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
