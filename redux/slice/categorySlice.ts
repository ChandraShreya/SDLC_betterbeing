import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/api/axios/axios";
import { endpoints } from "@/api/endPoints/endpoints";
import { log } from "console";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "getCategoriesAll",
  async () => {
    const res = await AxiosInstance.get(
      endpoints.categories.category
    );
    console.log("CATEGORY API:" , res.data);
    
    return res.data;
  }
);

const categorySlice = createSlice({
  name: "category", // ✅ match store key
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        // ✅ handle wrapped OR direct array safely
        state.categories = Array.isArray(action.payload)
          ? action.payload
          : action.payload.data;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
