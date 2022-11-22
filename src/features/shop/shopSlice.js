import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  paginationResult: [],
  isShopLoading: true,
};

export const getShop = createAsyncThunk(
  'getShop',
  async (params, { getState }) => {
    const { lowRangeFilter, highRangeFilter } = params;
    const state = getState().shop;
    try {
      const data = await client.fetch(
        `*[_type == "shop" | order(date desc)
          { }`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: {
    [getShop.pending]: (state) => {
      state.isPaginationLoading = true;
    },
    [getShop.fulfilled]: (state, action) => {
      state.isPaginationLoading = false;
      state.paginationResult = action.payload;
    },
    [getShop.rejected]: (state) => {
      state.isPaginationLoading = false;
    },
  },
});

export const { increaseHighRange, increaseLowRange } = shopSlice.actions;

export default shopSlice.reducer;
