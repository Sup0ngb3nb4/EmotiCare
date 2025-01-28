import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const processSlice = createSlice({
  name: "processActions",
  initialState: {
    loader: false
  },
  reducers: {
    runLoader: (state, action) => {
      state.loader = true;
    },
    stopLoader: (state, action) => {
      state.loader = false;
    },
  
  },
});

export const { runLoader, stopLoader, changeToggle } = processSlice.actions;
export default processSlice.reducer;
