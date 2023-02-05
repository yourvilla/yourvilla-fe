import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { Store } from "../src/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={client}>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          toastClassName="!rounded !mx-10 top-3 lg:!mx-0"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
