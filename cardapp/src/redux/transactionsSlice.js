import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionData } from '../services/services';

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await getTransactionData();
  return response;
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
