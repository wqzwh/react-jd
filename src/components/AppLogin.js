require('styles/AppLogin.css');
import React from 'react';

class AppLogin extends React.Component{
	render(){
		return (
			<div className="login">
				<nav className="nav">
					<div className="nav-container">
						<a href="/"><span className="nav-back"></span></a>
						<p className="nav-title">登录</p>
					</div>
					<div className="nav-padding"></div>
				</nav>
				<div className="telephone">
					<input name="telephone" maxlength="11" placeholder="手机号码" />
					<button disabled="" className="getCode disabled">获取验证码</button>
				</div>
				<div className="code">
					<input name="code" placeholder="验证码" maxlength="6" />
				</div>
				<div className="button disabled" disabled="">登录</div>
			</div>
			);
	}
}

export default AppLogin;

