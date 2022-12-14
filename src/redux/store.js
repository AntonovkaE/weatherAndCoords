import { configureStore } from '@reduxjs/toolkit';
import cityDataReducer from './cityDataSlice';

export default configureStore({
  reducer: {
    city: cityDataReducer,
  },
});
