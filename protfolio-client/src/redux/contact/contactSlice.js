import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'contact';

export const fetchContactData = createAsyncThunk(
  `${namespace}/fetchContactData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/contact')
      .then((res) => res.data);
    return data;
  }
);

export const contactSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchContactData.pending](state) {
      state.loading = 'pending';
    },
    [fetchContactData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchContactData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default contactSlice.reducer;
