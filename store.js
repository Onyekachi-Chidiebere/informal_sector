import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './src/reducers/userReducer';

const initialState = {
  user: {},
};

const reducer = combineReducers({
	user: userReducer,
});

const composeEnhancer = compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
