import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { dataReducer } from './reducers/post';

const rootReducer = combineReducers({
  post: dataReducer,
});

const reduxStore = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default reduxStore;
