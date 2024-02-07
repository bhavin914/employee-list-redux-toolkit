import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    addFormData: (state, action) => {
      const newFormData = action.payload;
      const existingIndex = state.findIndex(
        (formData) => formData.id === newFormData.id
      );
      if (existingIndex !== -1) {
        // Update existing form data
        state[existingIndex] = newFormData;
      } else {
        // Add new form data
        state.push(newFormData);
      }
    },
    deleteFormData: (state, action) => {
      const index = state.formData?.findIndex(
        (item) => item.key === action.payload
      );
      if (index !== -1) state.formData?.splice(index, 1);
    },
  },
});

export const { addFormData, deleteFormData } = formSlice.actions;
export default formSlice.reducer;
