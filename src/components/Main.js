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
	    	AppCartDisplay:true,
	    	cartId:0,
	    	CartDate:'选择时间',//购物车选择时间
	    	CartCount:1,//购物车中计数器
	    	HeadNavCartCount:0// 顶部购物车计数器
	    };
	}

	handleToggle(){
		this.setState({
			displayStyle: !this.state.displayStyle,
		});
	}

	// 点击加入购物车调用的方法
	HandlerJoinCart(){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
			HeadNavCartCount:this.state.HeadNavCartCount+1
		});

		

	}

	handleAppCartDisplay(e){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
			
		});

		let cartAddId=e.target.id;
		if(cartAddId!=''){
			this.setState({
				cartId: e.target.id,	
			});
		}
	}

	render() {
	    return (
	    	<div>
				<div className="index">
					<HeadNav HeadNavCartCount={this.state.HeadNavCartCount}/>
					<AppTopCon />
					<AppZhuSu
						DetailsData={this.state.data} 
						handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}/>
				</div>

				<AppCart 
					DetailsData={this.state.data}
					CartDate={this.state.CartDate}
					CartCount={this.state.CartCount}
					HandlerJoinCart={this.HandlerJoinCart.bind(this)}
					cartId={this.state.cartId}
					handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}
					AppCartDisplay={this.state.AppCartDisplay}/>

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
