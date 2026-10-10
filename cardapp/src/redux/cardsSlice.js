import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCardDeatils } from '../services/services';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await getCardDeatils();
  return response;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    selectedCard: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCard, clearSelectedCard } = cardsSlice.actions;
export default cardsSlice.reducer;
