import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  singleTypewriter: [],
  isLoading: true,
};

export const getSingleTypewriter = createAsyncThunk(
  'getSingleTypewriter',
  async (slug) => {
    try {
      const data = await client.fetch(`*[slug.current == '${slug}']
      { 'Slug':slug.current,
        title_pl,
        body_pl,
        title_en,
        body_en,
        'images':typewritersImgs[]{'url':asset._ref},
        date,
      }`);
      return data;
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
      console.log(action);
      state.isLoading = false;
      state.singleTypewriter = action.payload;
    },
    [getSingleTypewriter.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default singleTypewriterSlice.reducer;
