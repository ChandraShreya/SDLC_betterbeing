import AxiosInstance from "@/api/axios/axios";
import { endpoints } from "@/api/endPoints/endpoints";
import Bookmark from "@/app/bookmark/page";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*get all bookmarks */

export const getBookmarks = createAsyncThunk(
    "bookmark/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance.get(
                endpoints.bookmark.list // "/api/v1/bookmark/all/"
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data);
        }
    }
);
/* add bookmark */
export const addBookmark = createAsyncThunk(
    "blog/addBookmark",
    async (blogId: number, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance.post(
                endpoints.bookmark.add,   // ← your endpoint
                { blog_id: blogId },

            );

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data);
        }
    }
);

/* remove bookmark */
export const removeBookmark = createAsyncThunk(
  "bookmark/removeBookmark",
  async (blogId: number, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.delete(
        `${endpoints.bookmark.remove}${blogId}/`
      );

      return { blogId, ...response.data };
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState: {
        bookmarks: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBookmarks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBookmarks.fulfilled, (state, action) => {
                state.loading = false;
                state.bookmarks = action.payload;
            })
            .addCase(getBookmarks.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default bookmarkSlice.reducer;
