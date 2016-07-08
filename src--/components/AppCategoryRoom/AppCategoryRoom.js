import React from 'react';
import AppFoot from '../AppFoot/AppFoot';
import HeadNav from '../HeadNav/HeadNav';
import AppZhuSuItems from '../AppZhuSuItems/AppZhuSuItems';
import AppCart from '../AppCart/AppCart';

require('./AppCategoryRoom.css');

// 引入json数据
let Details=require('../../data/Detail.json');

class AppCategoryRoom extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	displayStyle:true,
	    	AppCartDisplay:true,
	    	cartId:0,
	    	data:Details,
	    };
	}

	handleToggle(){
		this.setState({
			displayStyle: !this.state.displayStyle,
		});
	}

	handleAppCartDisplay(e){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
		});

		let cartAddId=e.target.id;

		if(cartAddId!=''){
			this.setState({
				cartId: cartAddId,
			});
		}

	}
	render(){
		let ZhuSuItems=Details.map(function(value,index){
			return (
				<AppZhuSuItems  key={index}
								title={value.title}
								id={index}
								kezhu={value.number}
								suoimgurl={value.pics[0].url}
								price={value.price} 
								handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}
								AppCartDisplay={this.state.AppCartDisplay}/>
				);
		}.bind(this));

		return (
			<div className="AppCategoryBody AppZhuSu">
				<HeadNav />
				{ZhuSuItems}
				<AppFoot 
					handleToggle={this.handleToggle.bind(this)} 
					displayStyle={this.state.displayStyle}/>
				<AppCart 
					DetailsData={this.state.data}
					cartId={this.state.cartId}
					handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}
					AppCartDisplay={this.state.AppCartDisplay}/>	
			</div>	

			);

	}
}
export default AppCategoryRoom;
