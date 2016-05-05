import React from 'react';

class AppFoot extends React.Component{
	render(){
		return (
			<div>
				<div className="AppFoot_div1"></div>
				<footer className="tabBar">
					<div className="tabBar-link-container">
						<a className="tabBar-link active" href="">主页</a>
					</div>
					<div className="tabBar-link-container">
						<div className="tabBar-categoryMenu">
						<div className="tabBar-categoryMenu-sub">
							<a className="tabBar-link" href="">住宿</a>
						</div>
						<div className="tabBar-categoryMenu-sub">
							<a className="tabBar-link" href="">餐饮</a>
						</div>
						<div className="tabBar-categoryMenu-sub">
							<a className="tabBar-link" href="">娱乐</a>
						</div>
					</div>
					<div className="tabBar-link tabBar-Category ">分类</div>
					</div>
					<div className="tabBar-link-container">
						<a className="tabBar-link" href="/login">我的订单</a>
					</div>
				</footer>
			</div>
			);
	}
}

export default AppFoot;