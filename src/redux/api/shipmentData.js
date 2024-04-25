// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const shipmentData = createAsyncThunk(
//   "shipment/data",
//   async (thunkAPI) => {
//     try {
//       const res = await axios.get(
//         "https://tracking.bosta.co/shipments/track/13737343"
//       );
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue({ error: err.message });
//     }
//   }
// );

// export const shipmentData = createAsyncThunk(
//   "shipment/data",
//   async ({ rejectWithValue }) => {
//     try {
//       const config = {
//         headers: { "content-type": "application/json" },
//       };

//       const response = await axios.get(
//         "https://tracking.bosta.co/shipments/track/7234258",

//         config
//       );
//       if (response.status === 201) {
//         console.log(response);
//         return response.data;
//       }
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
