import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface navShowState {
  isShow: boolean;
}

const initialState: navShowState = {
  isShow: true,
};

export const navShowSlice = createSlice({
  name: 'navShow',
  initialState,
  reducers: {
    setNavShow: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
  },
});

export const { setNavShow } = navShowSlice.actions;

export const navShow = (state: RootState) => state.navShow.isShow;

export default navShowSlice.reducer;
