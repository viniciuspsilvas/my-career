// features/resumeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IResume } from "../models/Resume";

interface ResumeState {
  data: IResume | null;
  loading: boolean;
  error: string | null;
}

const initialState: ResumeState = {
  data: null,
  loading: false,
  error: null
};

export const fetchResumeData = createAsyncThunk(
  "resume/fetchResumeData",
  async () => {
    const response = await axios.get("/api/resume");
    return response.data;
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchResumeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch resume data";
      });
  }
});

export default resumeSlice.reducer;
