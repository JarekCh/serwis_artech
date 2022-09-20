import { configureStore } from '@reduxjs/toolkit';
import siteReducer from '../features/siteContent/siteContentSlice';
import languageReducer from '../features/language/languageSlice';

export const store = configureStore({
  reducer: {
    site: siteReducer,
    language: languageReducer,
  },
});
