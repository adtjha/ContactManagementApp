// store.ts

// Import necessary functions and components from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"; // Import the contacts reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Set the 'contacts' slice reducer
  },
});

// Export types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Get the state type of the store
export type AppDispatch = typeof store.dispatch; // Get the type of the dispatch function

// Export the configured Redux store as default
export default store;
