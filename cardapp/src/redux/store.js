import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cardsReducer from './cardsSlice';
import transactionsReducer from './transactionsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
    transactions: transactionsReducer,
  },
});
