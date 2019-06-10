import thunk from "redux-thunk";
import reducers from './reducers';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";

let middleware = [thunk];

if (__DEV__){
    const logger = createLogger({ collapsed: true });
    middleware = [...middleware, logger];    
} else {
    middleware = [...middleware];
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;