import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./App";
import { configureStore } from "./redux/store/configureStore";



let localStore: any = '';
let holding = { "auth" : { "currency" : "GBP", "exchange": 1, "basket" : '' }};
localStore = configureStore(holding);
const preloadedState = localStore.store.getState();
let store = localStore.store;


ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  document.getElementById("output")
);

//if (typeof window != 'undefined' && window.Cypress) {
//  window['store'] = store
//}