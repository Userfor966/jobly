import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserInfo = createAsyncThunk("user/fetchUserInfo", async () => {
  try {
    const response = await axios.post("https://admin-9i92.onrender.com/verify-token",
    {},
      { withCredentials: true }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response.data );
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false, 
    error: null,
    showUserMenu:false,
    openWork:null
  },
  reducers: {
 openMenu:(state)=>{
  state.showUserMenu=state.showUserMenu ? false : true,
  state.showUserMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll'
 },
 closeToWork:(state,action)=>{
  state.openWork=action.payload.newValue
 }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false; 
        state.user = action.payload.user; 
        state.isOwner=action.payload.isOwner
        state.openWork=action.payload.user.isOpen
        console.log(action.payload.isOwner)
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message; 
        console.log(action.message)
      });
  },
});
export const {openMenu,closeToWork} = userSlice.actions
export default userSlice.reducer;