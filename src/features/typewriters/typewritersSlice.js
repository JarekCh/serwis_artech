import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  writersResult: [],
  isTypewitersLoading: true,
  lowRangeFilter: 0,
  highRangeFilter: 6,
};

export const getTypewriters = createAsyncThunk(
  'getTypewriters',
  async (params) => {
    const { lowRangeFilter, highRangeFilter } = params;
    try {
      const data =
        await client.fetch(`*[_type == "typewriters" ] | order(date desc) [${lowRangeFilter}...${highRangeFilter}]
        { date,
          title_pl,
          body_pl,
          title_en,
          body_en,
          slug{current},
          'images':typewritersImgs[]{'url':asset->url}}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const typewritersSlice = createSlice({
  name: 'typewriters',
  initialState,
  reducers: {
    increaseHighRange: (state) => {
      const prevState = state.highRangeFilter;
      state.highRangeFilter = prevState + 6;
    },
    increaseLowRange: (state) => {
      const prevState = state.lowRangeFilter;
      state.lowRangeFilter = prevState + 6;
    },
  },
  extraReducers: {
    [getTypewriters.pending]: (state) => {
      state.isLoading = true;
    },
    [getTypewriters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.writersResult = action.payload;
    },
    [getTypewriters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { increaseHighRange, increaseLowRange } = typewritersSlice.actions;

export default typewritersSlice.reducer;
