import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  //この段階で同名のaction creatorも作成される
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementWithAmount: (state, action) => {
      console.log(action, state);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementWithAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
