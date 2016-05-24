import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import AppLogin from './components/AppLogin';
import NoMatch from './components/NoMatch';
import AppDetail from './components/AppDetail';
import AppCategoryRoom from './components/AppCategoryRoom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={App}/>
	    </Route>
	    <Route path="rooms" component={AppCategoryRoom}></Route>
	    <Route path="rooms/:roomId" component={AppDetail}></Route>
	    <Route path="login" component={AppLogin} />
		<Route path="*" component={NoMatch}/>
	</Router>
		)
	, document.getElementById('app'));