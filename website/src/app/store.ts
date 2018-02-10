import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import DataReducer from "../reducers/DataReducer";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory'


export const history = createHistory();

const middleware = applyMiddleware(
	routerMiddleware(history),
	thunk
);

export const rootReducer = combineReducers({
	router: routerReducer,
	data: DataReducer
});


export const Store = createStore(rootReducer, middleware);