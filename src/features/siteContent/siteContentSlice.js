import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  siteResult: [],
  isLoadingSite: true,
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
      state.isLoadingSite = true;
    },
    [getSiteContent.fulfilled]: (state, action) => {
      state.isLoadingSite = false;
      state.siteResult = action.payload;
    },
    [getSiteContent.rejected]: (state) => {
      state.isLoadingSite = false;
    },
  },
});

export default siteContentSlice.reducer;
