import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  siteResult: [],
  isSiteLoading: true,
  scrollPosition: 0,
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
  reducers: {
    scrollState: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
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

export const { scrollState, showBackToTopBtn, hideBackToTopBtn } =
  siteContentSlice.actions;

export default siteContentSlice.reducer;
