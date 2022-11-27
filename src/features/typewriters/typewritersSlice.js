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
  async (params, { getState }) => {
    const state = getState().typewriters;
    try {
      const data =
        await client.fetch(`*[_type == "typewriters" ] | order(date desc) [${state.lowRangeFilter}...${state.highRangeFilter}]
        { date,
          title_pl,
          body_pl,
          title_en,
          body_en,
          'slug':slug.current,
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
      state.highRangeFilter = prevState + 2;
    },
    increaseLowRange: (state) => {
      const prevState = state.highRangeFilter;
      state.lowRangeFilter = prevState;
    },
  },
  extraReducers: {
    [getTypewriters.pending]: (state) => {
      state.isLoading = true;
    },
    [getTypewriters.fulfilled]: (state, action) => {
      const prevState = state.writersResult;
      state.isLoading = false;
      if (state.highRangeFilter === 6) {
        state.writersResult = action.payload;
      }
      if (state.highRangeFilter > 7) {
        state.writersResult = prevState.concat(action.payload);
      }
    },
    [getTypewriters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { increaseHighRange, increaseLowRange } = typewritersSlice.actions;

export default typewritersSlice.reducer;
