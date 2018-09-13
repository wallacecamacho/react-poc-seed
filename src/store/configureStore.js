// @flow
//import { AsyncStorage } from "react-native";
//import devTools from "remote-redux-devtools";
//import devToolsEnhancer from 'remote-redux-devtools';
//import {composeWithDevTools} from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { persistStore, persistCombineReducers  } from "redux-persist";
//import storage from "redux-persist/es/storage";
import reducers from "../reducers/index";

export default function configureStore(onCompletion: () => void): any {
	const enhancer = compose(
		applyMiddleware(thunk),
		//devTools()
	);

	//const config = {
	//	key: 'root',
	//	storage,
	//};

	//const reducer = persistCombineReducers(config, reducers)

	const store = createStore(reducers, enhancer);
	//persistStore(store, { storage: storage }, onCompletion);

	if (process.env.NODE_ENV !== "production") {
		if (module.hot) {
		  module.hot.accept('../reducers/index', () => {
			store.replaceReducer(reducers)
		  })
		}
	  }

	return store;
}
