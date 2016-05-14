import React from 'react';

class AppZhuSuItems extends React.Component{
	render(){
		return (
			<div className="item container">
				<img className="img1" src={this.props.suoimgurl} />
				<div className="div1">
					<p className="p1">{this.props.title}</p>
					<p className="p2">
						<span>可住</span>
						<span>{this.props.number}</span>
						<span>人</span>
					</p>
				</div>
				<div className="div2">
					<p className="p1">
						<span className="span1">¥&nbsp;</span>
						<span>{this.props.price}</span>
						<span>&nbsp;</span>
						<span className="span4">起</span>
					</p>
					<img src="../images/cart_add@2x.png" />
				</div>
			</div>
			);
	}
}

export default AppZhuSuItems;