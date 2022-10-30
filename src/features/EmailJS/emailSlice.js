import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

// TODO check if its working

const initialState = {
  isOpen: true,
};

export const sendEmail = createAsyncThunk('sendEmail', async (form) => {
  emailjs
    .sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
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
