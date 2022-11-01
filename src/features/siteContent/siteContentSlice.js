import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  siteResult: [],
  isSiteLoading: true,
};

export const getSiteContent = createAsyncThunk('getSiteContent', async () => {
  try {
    const data = await client.fetch(`*[_type == "site"]
    {
      hero,
      assortment,
      service,
    }`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const siteContentSlice = createSlice({
  name: 'site',
  initialState,
  extraReducers: {
    [getSiteContent.pending]: (state) => {
      state.isSiteLoading = true;
    },
    [getSiteContent.fulfilled]: (state, action) => {
      state.isSiteLoading = false;
      state.siteResult = action.payload;
    },
    [getSiteContent.rejected]: (state) => {
      state.isSiteLoading = false;
    },
  },
});

export default siteContentSlice.reducer;
