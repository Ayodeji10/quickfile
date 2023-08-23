import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";

// store takes in reducers and actions
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
