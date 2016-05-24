require('styles/AppLogin.css');
require('styles/AppZhuSu.css');

import React from 'react';
import AppFoot from 'components/AppFoot';
import HeadNav from 'components/HeadNav';
import AppZhuSuItems from 'components/AppZhuSuItems';
// 引入json数据
let Details=require('../data/Detail.json');

class AppCategoryRoom extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	displayStyle:true
	    };
	}

	handleToggle(){
		this.setState({
			displayStyle: !this.state.displayStyle,
		});
	}

	render(){

		let ZhuSuItems=Details.map(function(value,index){
			return (
				<AppZhuSuItems  key={index}
								title={value.title}
								id={index}
								kezhu={value.number}
								suoimgurl={value.pics[0].url}
								price={value.price} />
				);
		}.bind(this));

		return (
			<div className="AppCategoryBody AppZhuSu">
				<HeadNav />
				{ZhuSuItems}
				<AppFoot 
					handleToggle={this.handleToggle.bind(this)} 
					displayStyle={this.state.displayStyle}/>
				{this.props.children}	
			</div>	

			);

	}
}

export default AppCategoryRoom;
