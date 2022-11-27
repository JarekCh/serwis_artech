import { configureStore } from '@reduxjs/toolkit';
import siteReducer from '../features/siteContent/siteContentSlice';
import languageReducer from '../features/language/languageSlice';
import typewritersReducer from '../features/typewriters/typewritersSlice';
import singleTypewriterReducer from '../features/singleTypewriter/singleTypewriterSlice';
import emailReducer from '../features/EmailJS/emailSlice';
import shopReducer from '../features/shop/shopSlice';

export const store = configureStore({
  reducer: {
    site: siteReducer,
    language: languageReducer,
    typewriters: typewritersReducer,
    singleTypewriter: singleTypewriterReducer,
    email: emailReducer,
    shop: shopReducer,
  },
});
