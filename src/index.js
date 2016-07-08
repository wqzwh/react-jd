import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import App from './containers/App';
import AppLogin from './components/AppLogin';
import NoMatch from './components/NoMatch';
import AppDetail from './components/AppDetail';
import AppCategoryRoom from './components/AppCategoryRoom';
import AppShopCart from './components/AppShopCart';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

let elmRoot=document.getElementById('app');

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={App}/>
			</Route>
			<Route path="rooms" component={AppCategoryRoom}></Route>
			<Route path="rooms/:roomId" component={AppDetail}></Route>
			<Route path="login" component={AppLogin} />
			<Route path="ShopCart" component={AppShopCart} />
			<Route path="*" component={NoMatch}/>
		</Router>
	</Provider>
	, elmRoot);