import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
  shopResult: [],
  isShopLoading: true,
};

export const getShop = createAsyncThunk('getShop', async () => {
  try {
    const data = await client.fetch(
      `*[_type == "shop" ] | order(date desc) {        
          title_pl,
          body_pl,
          title_en,
          body_en,
          'image':shopImg{'url':asset->url},
          date,
          auction_link,
          'slug':slug.current,
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: {
    [getShop.pending]: (state) => {
      state.isShopLoading = true;
    },
    [getShop.fulfilled]: (state, action) => {
      console.log('🚀 ~ file: shopSlice.js ~ line 37 ~ action', action.payload);
      state.isShopLoading = false;
      state.shopResult = action.payload;
    },
    [getShop.rejected]: (state) => {
      state.isShopLoading = false;
    },
  },
});

export default shopSlice.reducer;
