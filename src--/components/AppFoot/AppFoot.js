import React from 'react';
import {Link} from 'react-router';
require ('./AppFoot.css');

class AppFoot extends React.Component{
	render(){
		let ObjStyle={
			display:this.props.displayStyle ? 'none': 'block',
		}
		return (
			<div>
				<div className="AppFoot_mask" style={ ObjStyle } onClick={this.props.handleToggle}></div>
				<div className="AppFoot_div1"></div>
				<footer className="tabBar">
					<div className="tabBar-link-container">
						<Link className="tabBar-link active" to="/">主页</Link>
					</div>
					<div className="tabBar-link-container">
						<div className="tabBar-categoryMenu" style={ ObjStyle }>
							<div className="tabBar-categoryMenu-sub">
								<Link className="tabBar-link" to="/rooms">住宿</Link>
							</div>
							<div className="tabBar-categoryMenu-sub">
								<a className="tabBar-link" href="">餐饮</a>
							</div>
							<div className="tabBar-categoryMenu-sub">
								<a className="tabBar-link" href="">娱乐</a>
							</div>
						</div>
						<div className="tabBar-link tabBar-Category" onClick={this.props.handleToggle}>分类</div>
					</div>
					<div className="tabBar-link-container">
						<Link className="tabBar-link" to="/login">我的订单</Link>
					</div>
				</footer>
			</div>
			);
	}
}
export default AppFoot;