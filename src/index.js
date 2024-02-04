import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/Store";
import { FormProvider } from "./context/form-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FormProvider>
  </React.StrictMode>
);
