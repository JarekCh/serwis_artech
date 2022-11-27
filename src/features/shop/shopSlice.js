import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  shopResult: [],
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
      state.isShopLoading = true;
    },
    [getShop.fulfilled]: (state, action) => {
      state.isShopLoading = false;
      state.shopResult = action.payload;
    },
    [getShop.rejected]: (state) => {
      state.isShopLoading = false;
    },
  },
});

export const { increaseHighRange, increaseLowRange } = shopSlice.actions;

export default shopSlice.reducer;
