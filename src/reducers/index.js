import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});


// Reducers produce our application state. combineReducers makes multiple reducers work together nicely.

// console.log(store.getState());
// { libraries: [] }
