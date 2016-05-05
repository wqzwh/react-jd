import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const routes = (
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<Route path="login" component={AppLogin}/>
	    </Route>
    </Router>
);

export default routes;