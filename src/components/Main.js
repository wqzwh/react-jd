require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/HeadNav.css');
require('styles/AppTopCon.css');
require('styles/AppFoot.css');
require('styles/AppZhuSu.css');
require('styles/AppCart.css');
require('styles/AppDatePicker.css');

import React from 'react';
import HeadNav from 'components/HeadNav';
import AppTopCon from 'components/AppTopCon';
import AppZhuSu from 'components/AppZhuSu';
import AppFoot from 'components/AppFoot';
import AppCart from 'components/AppCart';
import AppDatePicker from 'components/AppDatePicker';


class App extends React.Component {
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

App.defaultProps = {

};
export default App;
