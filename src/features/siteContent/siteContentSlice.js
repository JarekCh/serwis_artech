import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSiteContent } from '../api/index.js';

const initialState = {
  siteResult: [],
  isSiteLoading: true,
  scrollPosition: 0,
};

export const getSiteContent = createAsyncThunk('getSiteContent', async () => {
  try {
    const data = await fetchSiteContent();
    const serializedData = JSON.parse(JSON.stringify(data));

    return serializedData;
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
      state.siteResult = action.payload.data;
    },
    [getSiteContent.rejected]: (state) => {
      state.isSiteLoading = false;
    },
  },
});

export const { scrollState } = siteContentSlice.actions;

export default siteContentSlice.reducer;
