import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'about';

export const fetchAboutData = createAsyncThunk(
  `${namespace}/fetchAboutData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/about')
      .then((res) => res.data);
    return data;
  }
);

export const aboutSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAboutData.pending](state) {
      state.loading = 'pending';
    },
    [fetchAboutData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchAboutData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default aboutSlice.reducer;
