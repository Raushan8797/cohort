import { createSlice } from "@reduxjs/toolkit";
import { Flag, User } from "lucide-react";
import { hydrateUserAction, loginUserAction } from "./AuthAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    User: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.User = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.User = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.User = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.pending , (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
         state.isLoading = false;
        state.User = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(hydrateUserAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
