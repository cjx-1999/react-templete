import { createSlice } from '@reduxjs/toolkit';

const sliceStore = createSlice({
  name: 'sliceStore',
  initialState: {
    list: [],
  },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setList } = sliceStore.actions;

export { setList };
export default sliceStore.reducer;
