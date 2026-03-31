import AxiosInstance from "@/api/axios/axios";
import { endpoints } from "@/api/endPoints/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const initialState = {
    blogs: [],
    featuredBlogs: [],
    latestBlogs: [],
    loading: false,
    error: null,

}

export const getAllBlogs = createAsyncThunk(
    "getAllBlogs",
    async () => {
        const response = await AxiosInstance.get(endpoints.blogs.list)
        console.log(response);
        return response.data
    }
)

export const getFeaturedBlogs = createAsyncThunk(
    "featuredBlogs",
    async () => {
        const response = await AxiosInstance.get(endpoints.blogs.featured)
        return response.data
    }
)

export const getLatestBlogs = createAsyncThunk(
    "latestBlogs",
    async () => {
        const response = await AxiosInstance.get(endpoints.blogs.latest)
        return response.data
    }
)

// BLOGS BY CATEGORY
export const getBlogsByCategory = createAsyncThunk(
    "blogs/getBlogsByCategory",
    async (category) => {
        const res = await AxiosInstance.get(
            endpoints.blogs.byCategory(category)
        );
        return res.data;
    }
);






const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // blogs list
            .addCase(getAllBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            })

            // featured blogs
            .addCase(getFeaturedBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFeaturedBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.featuredBlogs = action.payload;
            })
            .addCase(getFeaturedBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //latest blogs
            .addCase(getLatestBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLatestBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.latestBlogs = action.payload;
            })
            .addCase(getLatestBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load latest blogs";
            })

            // blogs by category
            .addCase(getBlogsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlogsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(getBlogsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });


    },
})

export default blogSlice.reducer