import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const namespace = 'skills';

export const fetchSkillsData = createAsyncThunk(
  `${namespace}/fetchSkillsData`,
  async () => {
    const data = await axios
      .get('http://localhost:4000/API/skills')
      .then((res) => res.data);
    return data;
  }
);

export const skillsSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchSkillsData.pending](state) {
      state.loading = 'pending';
    },
    [fetchSkillsData.fulfilled](state, { payload }) {
      state.loading = 'fulfilled';
      state.data = payload;
    },
    [fetchSkillsData.rejected](state) {
      state.loading = 'rejected';
    },
  },
});

export default skillsSlice.reducer;
