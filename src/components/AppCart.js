import React from 'react';

class AppCart extends React.Component{
	
	render(){
		console.log(this.props.DetailsData);
		console.log(this.props.cartId);
		let newData=this.props.DetailsData[this.props.cartId];
		let ObjStyle={
			display:this.props.AppCartDisplay ? 'none': 'block',
		}
		let BackgroundImg={
			backgroundImage:'url(' + newData.pics[0].url + ')'
		}		
		return (
			<div className="joinCart-container" style={ ObjStyle }>
				<div className="joinCart-mask" onClick={this.props.handleAppCartDisplay}></div>
				<div className="joinCart">
					<div className="joinCart-itemPhoto" style={ BackgroundImg}></div>
					<div className="joinCart-info">
						<div className="joinCart-infoSub">
							<p className="joinCart-itemName"></p>
							<p className="joinCart-fitNum">
								<span>适用</span>
								<span>人</span>
							</p>
						</div>
						<p className="joinCart-price">
							<span>￥</span>
							<span>{newData.price}</span>
						</p>
					</div>
					<div className="joinCart-datePicker">
						<p className="joinCart-date">选择时间</p>
						<img className="joinCart-arrow" src="../images/arrow.png" />
					</div>
					<div className="joinCart-counter">
						<p className="joinCart-num">数量</p>
						<div className="joinCart-numSetter">
							<img className="joinCart-min" src="../images/minus@2x.png" />
							<input type="text" maxlength="2" defaultValue="1" />
							<img className="joinCart-add" src="../images/add@2x.png" />
						</div>
					</div>
					<button disabled="" className="joinCart-confirm disabled">加入购物车</button>
				</div>
			</div>	
			);
	}


}

export default AppCart;