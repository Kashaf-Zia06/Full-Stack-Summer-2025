import { createSlice } from '@reduxjs/toolkit';

// Initial state of the counter
const initialState = {
  value: 0,
};

// Creating a slice which includes name, initial state and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment the counter
    increment(state) {
      state.value++;
    },
    // Decrement the counter
    decrement(state) {
      state.value--;
    },
    // Reset counter to 0
    reset(state) {
      state.value = 0;
    },
    // Increment counter by user-provided amount
    incrementByAmount(state, action) {
      state.value += Number(action.payload);
    },
  },
});

// Export actions for components to dispatch
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Export reducer to include in store
export default counterSlice.reducer;
