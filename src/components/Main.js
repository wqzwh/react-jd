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

// 引入json数据
let Details=require('../data/Detail.json');

class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	displayStyle:true,
	    	data:Details,
	    };
	}

	handleToggle(){
		console.log(this);
		this.setState({
			displayStyle: !this.state.displayStyle,
		});
	}

	render() {
	    return (
	    	<div>
				<div className="index">
					<HeadNav />
					<AppTopCon />
					<AppZhuSu
						DetailsData={this.state.data} />
				</div>
				<AppCart />
				<div className="AppFoot">
					<AppFoot 
						handleToggle={this.handleToggle.bind(this)} 
						displayStyle={this.state.displayStyle}/>
				</div>
				<AppDatePicker />
			</div>	
	    );
	}
}

App.defaultProps = {

};
export default App;
