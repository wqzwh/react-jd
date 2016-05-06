import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import AppLogin from './components/AppLogin';
import NoMatch from './components/NoMatch';
import AppDetail from './components/AppDetail';
import AppCategoryRoom from './components/AppCategoryRoom';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}></Route>
	    <Route path="login" component={AppLogin}></Route>
	    <Route path="detail" component={AppDetail}></Route>
	    <Route path="/category/room" component={AppCategoryRoom}></Route>
	    <Route path="*" component={NoMatch}/>
    </Router>
	, document.getElementById('app'));