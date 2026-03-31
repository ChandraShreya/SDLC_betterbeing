// import AxiosInstance from "@/api/axios/axios";
// import { endpoints } from "@/api/endPoints/endpoints";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { log } from "console";
// // import { log } from "console";
// import { Cookies } from "react-cookie";
// import { toast } from "sonner";


// const initialState = {
//   userId: null,
//   email: null,
//   token: null,
//   isloggedIn: false,
//   loading: false,
//   error: null,
// };
// let cookie = new Cookies()


// /*signUp*/
// export const authRegistration = createAsyncThunk(
//   "authRegistration",
//   async (payload) => {
//     const response = await AxiosInstance.post(endpoints.auth.signUp, payload);
//     console.log(response, "registration response");

//     return response.data;

//   }
// );
// /*verifyOtp*/
// export const verifyOtp = createAsyncThunk(
//   "verifyOtp",
//   async (payload) => {
//     const response = await AxiosInstance.post(
//       endpoints.auth.otp,
//       payload
//     );
//     return response.data;
//   }
// );


// const authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   reducers: {
//     logout: (state, action) => {
//       state.userId = null
//       state.email = null
//       state.token = null
//       toast("Logout sucessfull")
//       state.isloggedIn=false

//     },

//     checkToken: (state, action) => {
//       let token = cookie.get("token")
//       if (token !== null && token !== undefined) {
//         state.isloggedIn = true
//       }
//     }
//   },

//   extraReducers: (builder) => {
//     builder
//       /*register*/
//       .addCase(authRegistration.pending, (state, { payload }) => {
//         state.loading = true,
//           state.error = null
//        })

//       .addCase(authRegistration.fulfilled, (state, { payload }) => {
//         state.loading = false
//         if (payload.status == true) {
//           localStorage.setItem("Id", payload.user.id)
//           localStorage.setItem("email", payload.user.email)
//           // state.email=payload.user.email
//           toast.success(payload.message)
//         }
//       })

//       .addCase(authRegistration.rejected, (state, { payload }) => { 
//         state.loading = false

//       })

//             /*verifyOtp*/
//       .addCase(verifyOtp.pending, (state, { payload }) => {
//         state.loading = true
//         state.error = null
//        })
//       .addCase(verifyOtp.fulfilled, (state, { payload }) => {
//         state.loading = false
//         toast.success("OTP verified successfully")
//        })
//       .addCase(verifyOtp.rejected, (state, { payload }) => { 
//         state.loading = false
//         toast.error("OTP verification failed")
//       });

//       /*login*/
//     //   .addCase(authLogin.pending, (state, { payload }) => {
//     //     state.loading = true
//     //     state.error = null
//     //   })
//     //   .addCase(authLogin.fulfilled, (state, { payload }) => {
//     //     state.loading = false
//     //     if (payload.status == true) {
//     //       state.isloggedIn = true
//     //     }
//     //   })
//     //   .addCase(authLogin.rejected, (state, { payload }) => {
//     //     state.loading = false
//     //    })



//   },
// });

// export default authSlice;
// export const { logout, checkToken } = authSlice.actions



"use client";

import AxiosInstance from "@/api/axios/axios";
import { endpoints } from "@/api/endPoints/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { toast } from "sonner";

const cookie = new Cookies();

const initialState = {
  userId: null,
  email: null,
  token: null,
  isloggedIn: false,
  loading: false,
  error: null,
  profileImage: null,
  username: null,
  fullName: null,
};

/* ================= REGISTER ================= */
export const authRegistration = createAsyncThunk(
  "auth/registration",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endpoints.auth.signUp,
        formData
      );

      return response.data; // only backend message
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

/* ================= VERIFY OTP ================= */
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endpoints.auth.otp,
        { email, otp }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

/* ================= LOGIN ================= */
export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endpoints.auth.signIn,
        { email, password }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);


/* ================= VERIFY LOGIN OTP ================= */
export const verifyLoginOtp = createAsyncThunk(
  "auth/verifyLoginOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        "/api/v1/auth/login/verify-otp/",
        { email, otp }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
/* ================= GET PROFILE ================= */
export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        endpoints.auth.profile   
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userId = null;
      state.email = null;
      state.token = null;
      state.isloggedIn = false;

      cookie.remove("token");
      localStorage.removeItem("email");

      toast.success("Logout successful");
    },

    checkToken: (state) => {
      const token = cookie.get("token");
      if (token) {
        state.isloggedIn = true;
        state.token = token;
      }
    },
  },

  extraReducers: (builder) => {
    builder

      /* REGISTER */
      .addCase(authRegistration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(authRegistration.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload?.message) {
          toast.success(payload.message);
        }
      })

      .addCase(authRegistration.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload?.error || "Registration failed");
      })

      /* VERIFY OTP (SIGNUP) */
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(verifyOtp.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload?.status === true || payload?.token) {
          const token = payload?.token;

          state.token = token;
          state.isloggedIn = true;

          if (token) {
            cookie.set("token", token, { path: "/" });
          }

          toast.success(payload?.message || "OTP verified successfully");
        }
      })

      .addCase(verifyOtp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload?.error || "OTP verification failed");
      })

      /* LOGIN */
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload?.status === true) {
          toast.success(payload?.message || "OTP sent to email");
        }
      })

      .addCase(authLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload?.error || "Login failed");
      })

      /* VERIFY LOGIN OTP */
      .addCase(verifyLoginOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(verifyLoginOtp.fulfilled, (state, { payload }) => {
        state.loading = false;

        // ✅ Check access token instead of status
        if (payload?.access) {
          const accessToken = payload.access;
          const refreshToken = payload.refresh;

          state.token = accessToken;
          state.isloggedIn = true;

          state.userId = payload?.user?.id;
          state.email = payload?.user?.email;
          // Store tokens
          cookie.set("token", accessToken, { path: "/" });
          cookie.set("refresh", refreshToken, { path: "/" });

          toast.success("Login verified successfully");
        }
      })

      .addCase(verifyLoginOtp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload?.error || "Login OTP verification failed");
      })

      /* GET PROFILE */
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userId = payload?.id;
        state.username = payload?.username;
        state.fullName = payload?.full_name;
        state.email = payload?.email;
        state.profileImage = payload?.profile_image;
      })

      .addCase(getProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload?.error || "Failed to fetch profile");
      });
}
});

export const { logout, checkToken } = authSlice.actions;
export default authSlice.reducer;