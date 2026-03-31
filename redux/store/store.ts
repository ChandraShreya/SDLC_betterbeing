import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../slice/blogSlice";
import categories from "../slice/categorySlice"
import authSlice from "../slice/authSlice";
import Bookmark from "@/app/bookmark/page";
import bookmarkSlice from "../slice/bookmarkSlice";

export const store = configureStore({
    reducer:{
        blogs:blogSlice,
        category:categories,
        auth: authSlice,
        bookmark:bookmarkSlice

        
    }
})