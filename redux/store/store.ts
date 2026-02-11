import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../slice/blogSlice";
import categories from "../slice/categorySlice"

export const store = configureStore({
    reducer:{
        blogs:blogSlice,
        category:categories
    }
})