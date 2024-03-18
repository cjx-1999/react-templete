import { configureStore } from '@reduxjs/toolkit';
import sliceStoreReducer from './sliceExample.js';
import commonStoreReducer from './common.js';
const store = configureStore({
  reducer: {
    slice: sliceStoreReducer,
    common: commonStoreReducer
  },
});

export default store;
