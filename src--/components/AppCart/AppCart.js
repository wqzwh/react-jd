import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HandlerAddAction from '../../actions';

require('./AppCart.css');
class AppCart extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	count:this.props.CartCount,
	    	price:this.props.DetailsData[this.props.cartId].price,
	    	date:this.props.CartDate,
	    	disabled:'disabled',
	    	flag:false
	    };
	}
	handlerChange(e){
		this.setState({
			count: Math.floor(e.target.value)
		});

		console.log(this.state.count);
	}

	CartDatePicker(){
		if(this.state.date=='选择时间'){
			this.setState({
				date: '2015-12-3',
				disabled: '',
				flag:true
			});
		}
	}
	handlerReduce(){
		if(this.state.count<2){
			this.setState({
				count:1,
				price:this.props.DetailsData[this.props.cartId].price * this.state.count
			});
		}else{
			this.setState({
				count:this.state.count-1,
				price:this.props.DetailsData[this.props.cartId].price * this.state.count
			});
		}
	}
	// handlerAdd(){
	// 	let ncount=this.state.count+1;
	// 	this.setState({
	// 		count:ncount,
	// 		price:this.props.DetailsData[this.props.cartId].price * ncount
	// 	});
	// 	console.log(this.state.price);
	// }
	render(){
		console.log(this.props);
		let newData=this.props.DetailsData[this.props.cartId];
		let ObjStyle={
			display:this.props.AppCartDisplay ? 'none': 'block',
		}
		let BackgroundImg={
			backgroundImage:'url(' + newData.pics[0].url + ')'
		}	
		return (
			<div className="joinCart-container" style={ ObjStyle }>
				<div className="joinCart-mask" onClick={this.props.handleAppCartDisplay.bind(this)}></div>
				<div className="joinCart">
					<div className="joinCart-itemPhoto" style={ BackgroundImg }></div>
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
							<span>{this.state.price}</span>
						</p>
					</div>
					<div className="joinCart-datePicker" onClick={this.CartDatePicker.bind(this)}>
						<p className="joinCart-date" ref="joinCartDate">{this.state.date}</p>
						<img className="joinCart-arrow" src="../images/arrow.png" />
					</div>
					<div className="joinCart-counter">
						<p className="joinCart-num">数量</p>
						<div className="joinCart-numSetter">
							<img className="joinCart-min" onClick={this.handlerReduce.bind(this)} src="../../images/minus@2x.png" />
							<input type="text" value={this.props.CartCount[0].count} onChange={this.handlerChange.bind(this)} />
							<img className="joinCart-add" onClick={()=>this.props.handlerAdd(this.props.CartCount[0].count,this.state.price)} src="../../images/add@2x.png" />
						</div>
					</div>
					<button ref="CartBtn" disabled={this.state.disabled} className={this.state.flag ? "joinCart-confirm" : "joinCart-confirm disabled"} onClick={this.props.HandlerJoinCart}>加入购物车</button>
				</div>
			</div>	
			);
	}
}
export default AppCart;