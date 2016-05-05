require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/HeadNav.css');
require('styles/AppTopCon.css');
require('styles/AppFoot.css');
require('styles/AppZhuSu.css');
require('styles/AppCart.css');
require('styles/AppDatePicker.css');

import React from 'react';
import HeadNav from 'components/HeadNav.js';
import AppTopCon from 'components/AppTopCon.js';
import AppZhuSu from 'components/AppZhuSu.js';
import AppFoot from 'components/AppFoot.js';
import AppCart from 'components/AppCart.js';
import AppDatePicker from 'components/AppDatePicker.js';

class AppComponent extends React.Component {
  render() {
    return (
    	<div>
			<div className="index">
				<HeadNav />
				<AppTopCon />
				<AppZhuSu />
			</div>
			<AppCart />
			<div className="AppFoot">
				<AppFoot />
			</div>
			<AppDatePicker />
		</div>	
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
