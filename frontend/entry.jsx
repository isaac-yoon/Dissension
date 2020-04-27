import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();


  // BEGIN TESTING
  window.login = APIUtil.login
  window.logout = APIUtil.logout
  window.signup = APIUtil.signup

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // END TESTING


  ReactDOM.render(<h1>Welcome to DisArray</h1>, root);
});