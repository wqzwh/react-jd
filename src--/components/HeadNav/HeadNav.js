import React from 'react';
import {Link} from 'react-router';
require ('./HeadNav.css');

class HeadNav extends React.Component {
	render() {
		return (
			<nav className="nav">
				<div className="nav-container">
					<Link to="/"><span className="nav-back"></span></Link>
					<p className="nav-title">我的顶部</p>
					<span className="nav-shopCart">
						<img src="../images/cart@2x.png"/>
						<Link to="ShopCart"><span className="nav-shopCart-num">{this.props.HeadNavCartCount}</span></Link>
					</span>
				</div>
			</nav>
			);
	}
}
export default HeadNav;