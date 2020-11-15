import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Awesome for debugging our redux code


import rootReducer from './root-reducer';

const middlewares = [logger];

// Spread in all of the methods or all of the values in this array [logger] into the function as arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;