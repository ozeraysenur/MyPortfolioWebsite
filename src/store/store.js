import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";


export const myStore = createStore(reducers)