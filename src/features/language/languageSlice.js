import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEnglish: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languagePL: (state, action) => {
      state.isEnglish = true;
    },
    languageEN: (state, action) => {
      state.isEnglish = false;
    },
  },
});

export const { languagePL, languageEN } = languageSlice.actions;

export default languageSlice.reducer;
