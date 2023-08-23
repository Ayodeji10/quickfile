import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import themeReducer from "./features/theme";

// store takes in reducers and actions
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
