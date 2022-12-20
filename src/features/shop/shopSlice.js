import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShop } from '../api/index.js';

const initialState = {
  shopResult: [],
  isShopLoading: true,
};

export const getShop = createAsyncThunk('getShop', async () => {
  try {
    const data = await fetchShop();
    const serializedData = JSON.parse(JSON.stringify(data));

    return serializedData;
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
      state.isShopLoading = false;
      state.shopResult = action.payload.data;
    },
    [getShop.rejected]: (state) => {
      state.isShopLoading = false;
    },
  },
});

export default shopSlice.reducer;
