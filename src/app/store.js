import { configureStore } from '@reduxjs/toolkit';
import siteReducer from '../features/siteContent/siteContentSlice';

export const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});
