import { addListener, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  count: 0,
  list:[]
};

// Create a Redux slice
const ReduxSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state) => {
      state.count += 1;
    },
    removeTask: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
export const { addTask, removeTask } = ReduxSlice.actions;

// Export reducer
export default ReduxSlice.reducer;