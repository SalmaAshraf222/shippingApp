import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const shipmentData = createAsyncThunk(
  "shipment/data",
  async (thunkAPI) => {
    try {
      const res = await axios.get(
        "https://tracking.bosta.co/shipments/track/13737343"
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const initialState = {
  data: [],
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    getShipmentData: (state, action) => {
      state.data = action.payload;
      // console.log(state.data);
    },
  },
});
export const { getShipmentData } = shipmentSlice.actions;
export default shipmentSlice.reducer;
