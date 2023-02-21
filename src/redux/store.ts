import { configureStore } from '@reduxjs/toolkit';
import navShowSlice from './slices/navShowSlice';
import totalSlice from './slices/totalSlice';

export const store = configureStore({
  reducer: {
    navShow: navShowSlice,
    total: totalSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
