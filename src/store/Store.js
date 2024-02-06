// import { configureStore } from "@reduxjs/toolkit";
// import formReducer from "../Slices/FormSlice";

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
// });

// export default store;

// src/app/store.js or where your Redux store is configured

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
