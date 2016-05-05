import React from 'react';

class HeadNav extends React.Component {
	render() {
		return (
			<nav className="nav">
				<div className="nav-container">
					<p className="nav-title">我的顶部</p>
					<span className="nav-shopCart">
						<img src="../images/cart@2x.png"/>
					</span>
				</div>
			</nav>
			);
	}
}

export default HeadNav;