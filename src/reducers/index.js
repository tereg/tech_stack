import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});


// Reducers produce our application state. combineReducers makes multiple reducers work together nicely.

// console.log(store.getState());
// { libraries: [] }
