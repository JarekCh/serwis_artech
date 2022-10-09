import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  writersResult: [],
  isTypewitersLoading: true,
};

export const getTypewriters = createAsyncThunk('getTypewriters', async () => {
  try {
    const data = await client.fetch(`*[_type == "typewriters"][]
    { date,      
      title_pl,
      body_pl,
      title_en,
      body_en,
      'images':typewritersImgs[]{'url':asset->url}}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const typewritersSlice = createSlice({
  name: 'typewriters',
  initialState,
  extraReducers: {
    [getTypewriters.pending]: (state) => {
      state.isLoading = true;
    },
    [getTypewriters.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.writersResult = action.payload;
    },
    [getTypewriters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default typewritersSlice.reducer;
