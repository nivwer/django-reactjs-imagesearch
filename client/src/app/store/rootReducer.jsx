import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import imagesDataReducer from "../../features/imagesData/imagesDataSlice";
import popularSearchesReducer from "../../features/popularSearches/popularSearchesSlice";
import { apiSlice } from "../../api/apiSlice";

export const store = configureStore({
  reducer: {
    // Queries for the backend API.
    api: apiSlice.reducer,
    // Images results.
    imagesData: imagesDataReducer,
    // Popular searches.
    popularSearchesData: popularSearchesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
