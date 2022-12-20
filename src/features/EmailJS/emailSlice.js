import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createEmail } from '../api/index.js';

const initialState = {
  isOpen: false,
};

export const sendEmail = createAsyncThunk('sendEmail', async (formData) => {
  try {
    const { data } = await createEmail(formData);
  } catch (error) {
    console.log(error.message);
  }
});

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    closeEmailModal: (state, action) => {
      state.isOpen = false;
    },
  },
  extraReducers: {
    [sendEmail.pending]: (state) => {
      state.isOpen = false;
    },
    [sendEmail.fulfilled]: (state, action) => {
      state.isOpen = true;
    },
    [sendEmail.rejected]: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { closeEmailModal } = emailSlice.actions;

export default emailSlice.reducer;
