import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserInfo = createAsyncThunk("user/fetchUserInfo", async () => {
  const response = await axios.get("http://localhost:3001/profile",
   { withCredentials: true }
   );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading"; 
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded"; 
        state.user = action.payload; 
        console.log(action.payload)
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";  
        state.error = action.error.message; 
      });
  },
});

export default userSlice.reducer;