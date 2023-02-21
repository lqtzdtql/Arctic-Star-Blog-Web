import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface totalState {
  total: number;
}

const initialState: totalState = {
  total: 0,
};

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = totalSlice.actions;

export const pageTotal = (state: RootState) => state.total.total;

export default totalSlice.reducer;
