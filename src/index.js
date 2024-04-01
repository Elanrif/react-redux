import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
// import "./styles/index.scss";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

//dispatch Send data in STORE
store.dispatch(getPosts())
store.dispatch(getUser())
// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
