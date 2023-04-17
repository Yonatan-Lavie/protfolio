import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'theme';

export const fetchThemeData = createAsyncThunk(
  `${namespace}/fetchThemeData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/theme')
      .then((res) => res.data);
    return data;
  }
);

export const themeSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchThemeData.pending](state) {
      state.loading = 'pending';
    },
    [fetchThemeData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchThemeData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default themeSlice.reducer;
