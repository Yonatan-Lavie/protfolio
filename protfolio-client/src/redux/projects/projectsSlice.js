import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'projects';

export const fetchProjectsData = createAsyncThunk(
  `${namespace}/fetchProjectsData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/projects')
      .then((res) => res.data);
    return data;
  }
);

export const projectsSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProjectsData.pending](state) {
      state.loading = 'pending';
    },
    [fetchProjectsData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchProjectsData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default projectsSlice.reducer;
