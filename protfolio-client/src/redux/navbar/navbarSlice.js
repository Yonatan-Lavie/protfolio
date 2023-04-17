import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'navbar';

export const fetchNavbarData = createAsyncThunk(
  `${namespace}/fetchNavbarData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/navbar')
      .then((res) => res.data);
    return data;
  }
);

export const navbarSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchNavbarData.pending](state) {
      state.loading = 'pending';
    },
    [fetchNavbarData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchNavbarData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default navbarSlice.reducer;
