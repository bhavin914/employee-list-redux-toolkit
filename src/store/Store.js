import { configureStore } from "@reduxjs/toolkit";

import formReducer from "../Slices/FormSlice";
import throttle from "lodash/throttle";
import { loadState, saveState } from "../Utils/localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState({
      form: store.getState().form,
    });
  }, 1000)
);

export default store;
