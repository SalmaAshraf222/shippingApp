import { configureStore } from "@reduxjs/toolkit";
import shipmentSlice from "./slices/shipmentSlice";

// Pull in the postsSlice reducer and rename it to postsReducer

// Create the Redux store and pass in the postsReducer as the initial data
export const store = configureStore({
  reducer: {
    shipment: shipmentSlice,
  },
});
