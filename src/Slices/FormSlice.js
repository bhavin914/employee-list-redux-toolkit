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
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
