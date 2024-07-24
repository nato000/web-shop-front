import { configureStore } from '@reduxjs/toolkit';
import authStateSlice from './authState/authState.slice';

export const store = configureStore({
  reducer: {
    authState: authStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
