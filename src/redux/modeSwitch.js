import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value;
    },
  },
});

export const { change } = counterSlice.actions;

export default counterSlice.reducer;
