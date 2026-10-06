import { createSlice } from "@reduxjs/toolkit";

const counterSclice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  // here is the action to ubdate the state
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSclice.actions;

export default counterSclice.reducer;
