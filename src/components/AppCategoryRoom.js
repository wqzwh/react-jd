require('styles/AppLogin.css');
require('styles/AppZhuSu.css');

import React from 'react';
import AppFoot from 'components/AppFoot';

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
		return (
			<div className="AppCategoryBody AppZhuSu">
				<nav className="nav">
					<div className="nav-container">
						<p className="nav-title">住宿</p>
						<span className="nav-shopCart">
							<img src="../images/cart@2x.png" />
						</span>
					</div>
					<div className="nav-padding"></div>
				</nav>
				<div className="item container">
					<img className="img1" src="../images/123.jpg" />
					<div className="div1">
						<p className="p1">海边独栋木屋</p>
						<p className="p2">
							<span>可住</span>
							<span>3</span>
							<span>人</span>
						</p>
					</div>
					<div className="div2">
						<p className="p1">
							<span className="span1">¥&nbsp;</span>
							<span>0.01</span>
							<span>&nbsp;</span>
							<span className="span4">起</span>
						</p>
						<img src="../images/cart_add@2x.png" />
					</div>
				</div>
				<div className="item container">
					<img className="img1" src="../images/123.jpg" />
					<div className="div1">
						<p className="p1">海边独栋木屋</p>
						<p className="p2">
							<span>可住</span>
							<span>3</span>
							<span>人</span>
						</p>
					</div>
					<div className="div2">
						<p className="p1">
							<span className="span1">¥&nbsp;</span>
							<span>0.01</span>
							<span>&nbsp;</span>
							<span className="span4">起</span>
						</p>
						<img src="../images/cart_add@2x.png" />
					</div>
				</div>
				<AppFoot 
					handleToggle={this.handleToggle.bind(this)} 
					displayStyle={this.state.displayStyle}/>
			</div>	
			);
	}
}

export default AppCategoryRoom;
