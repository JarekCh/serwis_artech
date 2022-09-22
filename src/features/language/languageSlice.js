import { createSlice } from '@reduxjs/toolkit';

const setLanguageState = localStorage.getItem('initialLanguage')
  ? JSON.parse(localStorage.getItem('initialLanguage'))
  : false;

const initialState = {
  isEnglish: setLanguageState,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languagePL: (state, action) => {
      state.isEnglish = true;
      localStorage.setItem('initialLanguage', JSON.stringify(state.isEnglish));
    },
    languageEN: (state, action) => {
      state.isEnglish = false;
      localStorage.setItem('initialLanguage', JSON.stringify(state.isEnglish));
    },
  },
});

export const { languagePL, languageEN } = languageSlice.actions;

export default languageSlice.reducer;
