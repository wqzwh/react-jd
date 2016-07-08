import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { handlerAdd } from '../actions';
import HeadNav from '../components/HeadNav/HeadNav';
import AppTopCon from '../components/AppTopCon/AppTopCon';
import AppZhuSu from '../components/AppZhuSu/AppZhuSu';
import AppFoot from '../components/AppFoot/AppFoot';
import AppCart from '../components/AppCart/AppCart';
import AppDatePicker from '../components/AppDatePicker/AppDatePicker';
import { getVisibleProducts } from '../reducers/getInfo';
require ('../styles/App.css');
// 引入json数据
let Details=require('../data/Detail.json');

class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	displayStyle:true,
	    	data:Details,
	    	AppCartDisplay:true,
	    	cartId:0,
	    	CartDate:'选择时间',//购物车选择时间
	    	CartCount:1,//购物车中计数器
	    	HeadNavCartCount:0// 顶部购物车计数器
	    };
	}

	handleToggle(){
		this.setState({
			displayStyle: !this.state.displayStyle,
		});
	}
	
	// 点击加入购物车调用的方法
	HandlerJoinCart(){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
			HeadNavCartCount:this.state.HeadNavCartCount+1
		});
	}

	handleAppCartDisplay(e){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
			
		});

		let cartAddId=e.target.id;
		if(cartAddId!=''){
			this.setState({
				cartId: e.target.id,	
			});
		}
	}
	render() {
		console.log(this.props);
		const { AppCartAddNumInfo,actions} = this.props;
		const {handlerAdd}=actions;
	    return (
	    	<div>
				<div className="index">
					<HeadNav HeadNavCartCount={this.state.HeadNavCartCount}/>
					<AppTopCon />
					<AppZhuSu
						DetailsData={this.state.data} 
						handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}/>
				</div>

				<AppCart 
					DetailsData={this.state.data}
					CartDate={this.state.CartDate}
					CartCount={AppCartAddNumInfo}
					HandlerJoinCart={this.HandlerJoinCart.bind(this)}
					cartId={this.state.cartId}
					handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}
					AppCartDisplay={this.state.AppCartDisplay}
					handlerAdd={handlerAdd}/>

				<div className="AppFoot">
					<AppFoot 
						handleToggle={this.handleToggle.bind(this)} 
						displayStyle={this.state.displayStyle}/>
				</div>
				<AppDatePicker />
			</div>	
	    );
	}
}

App.defaultProps = {

};

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  handlerAdd: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { handlerAdd }
)(App)