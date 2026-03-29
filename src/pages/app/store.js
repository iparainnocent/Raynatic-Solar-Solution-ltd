import { configureStore } from "@reduxjs/toolkit";

// Placeholder slices until we build the actual feature slices
// These will be replaced with real slices from the features directory
const authSlice = { reducer: (state = {}, action) => state };
const bookingSlice = { reducer: (state = {}, action) => state };
const contactSlice = { reducer: (state = {}, action) => state };
const portfolioSlice = { reducer: (state = {}, action) => state };

export const store = configureStore({
  reducer: {
    // Each key here corresponds to a slice of your application's state
    auth: authSlice.reducer,
    booking: bookingSlice.reducer,
    contact: contactSlice.reducer,
    portfolio: portfolioSlice.reducer,
  },
});
