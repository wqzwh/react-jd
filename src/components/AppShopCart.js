require('styles/AppShopCart.css');

import React from 'react';
import {Link} from 'react-router';

class AppShopCart extends React.Component {
	render() {
		return (
			<div className="shopCart">
				<nav className="nav">
					<div className="nav-container">
						<span className="nav-back"></span>
						<p className="nav-title">购物车</p>
					</div>
					<div className="nav-padding"></div>
				</nav>
				<div className="shopCart-body">
					<div className="shopCart-item">
						<div className="shopCart-select">
							<img src="../images/checked.png" />
						</div>
						<div className="shopCart-cover">
							<img src="" />
						</div>
						<div className="shopCart-info">
							<p>
								<span>山地迷你房车</span>
								<span className="shopCart-price">
									<span>合计 ¥</span>
									<span>199.00</span>
								</span>
							</p>
							<p className="shopCart-date">
								<span>2016-06-09</span>
								<span> - </span>
								<span>2016-06-10</span>
							</p>
							<p className="shopCart-counter">
								<span>-</span>
								<span>1</span>
								<span>+</span>
							</p>
						</div>
					</div>
				</div>
				<div className="shopCart-footerPadding"></div>
				<footer className="shopCart-footer">
					<div className="shopCart-allSelected">
						<img src="../images/checked.png" />
					</div>
					<span className="shopCart-allSelect">全选</span>
					<span className="shopCart-total">合计:&nbsp;&nbsp;</span>
					<span className="shopCart-totalPrice">
						<span>¥</span>
						<span>199.00</span>
					</span>
					<button className="shopCart-buy ">
						<span>结算(</span>
						<span>1</span>
						<span>)</span>
					</button>
				</footer>
			</div>
			);
	}
}
export default AppShopCart;