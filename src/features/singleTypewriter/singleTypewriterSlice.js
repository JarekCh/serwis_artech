import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSingleWriter } from '../api/index.js';

const initialState = {
  singleTypewriter: [],
  isLoading: true,
};

export const getSingleTypewriter = createAsyncThunk(
  'getSingleTypewriter',
  async (slug) => {
    try {
      const data = await fetchSingleWriter(slug);
      const serializedData = JSON.parse(JSON.stringify(data));

      return serializedData;
    } catch (error) {
      console.log(error);
    }
  }
);

const singleTypewriterSlice = createSlice({
  name: 'singleTypewriter',
  initialState,
  extraReducers: {
    [getSingleTypewriter.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleTypewriter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleTypewriter = action.payload.data[0];
    },
    [getSingleTypewriter.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default singleTypewriterSlice.reducer;
