import { configureStore } from '@reduxjs/toolkit';
import navShowSlice from './slices/navShowSlice';

export const store = configureStore({
  reducer: {
    navShow: navShowSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
