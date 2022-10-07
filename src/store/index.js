import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import { unisReducer } from "./reducers/UnisReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    unis: unisReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));