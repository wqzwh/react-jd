import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from '../containers';
import AppLogin from '../components/AppLogin/AppLogin';
import AppCategoryRoom from '../components/AppCategoryRoom/AppCategoryRoom';
import AppShopCart from '../components/AppShopCart/AppShopCart';
import NoMatch from '../components/NoMatch/NoMatch';
import AppDetail from '../components/AppDetail/AppDetail';

const Routers=(
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
);

export default Routers;