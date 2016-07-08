import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './routers';
import { getAllProducts } from './actions';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let rootElm=document.getElementById('app');

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk ]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render(
	<Provider store={store}>
		{Routers}
	</Provider>
	, rootElm);