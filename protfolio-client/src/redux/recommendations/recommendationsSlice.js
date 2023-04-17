import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'recommendations';

export const fetchRecommendationsData = createAsyncThunk(
  `${namespace}/fetchRecommendationsData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/recommendations')
      .then((res) => res.data);
    return data;
  }
);

export const recommendationsSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRecommendationsData.pending](state) {
      state.loading = 'pending';
    },
    [fetchRecommendationsData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchRecommendationsData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default recommendationsSlice.reducer;
