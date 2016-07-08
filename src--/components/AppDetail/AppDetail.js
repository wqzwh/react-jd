import React from 'react';
import Slider from 'react-slick';
import HeadNav from '../HeadNav/HeadNav';
import AppCart from '../AppCart/AppCart';
import AppDatePicker from '../AppDatePicker/AppDatePicker';
require('./AppDetail.css');

class AppDetail extends React.Component{
	// 定义内容组件自己的状态
	constructor(props) {
	    super(props);
	    this.state = {
	    	data:[],
	    	AppCartDisplay:true,
	    	cartId:0
	    };
	}
	// 在渲染dom之前调用，获取数据
	componentWillMount(){
		// 引入json数据
		let Details=require('../../data/Detail.json');
		this.setState({
			data:Details,
		});
	}

	handleAppCartDisplay(e){
		this.setState({
			AppCartDisplay: !this.state.AppCartDisplay,
		});
		console.log(e);

		let cartAddId=e.target.id;
		if(cartAddId!=''){
			this.setState({
				cartId: cartAddId,	
			});
		}
	}
	// 熏染数据
	render(){
		// 根据路由定义的路径获取相应id对应的数据
		let newData=this.state.data[this.props.params.roomId];
		let imgitems=newData.pics.map(function (value,index){
			return (
				<div className="slider-img" key={index} alt={value.alt} style={{backgroundImage:'url(' + value.url + ')'}} data-index={index}></div>
				)
		});
		let settings={
			dots: true,
		    infinite: true,
		    speed: 500,
		    adaptiveHeight:true,//自动调节幻灯片的高度
		    // className:'slick-active',
		    // dotsClass:'slick-active',
		    arrows:false,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay:true,
		    centerMode:true,
		    lazyLoad:true
		};
		return (
			<div className="detail">
				<HeadNav />
				<div className="slider">
					<Slider {...settings}>
						{imgitems}
					</Slider>
				</div>
				<div className="title">
					<div className="desc">
						<h3>{newData.title}</h3>
						<h4>
							<span>可住</span>
							<span>{newData.number}</span>
							<span>人</span>
						</h4>
					</div>
					<div className="price">
						<span>￥</span>
						<b>
							<span>{newData.price}</span>
							<span>/晚</span>
						</b>
					</div>
				</div>
				<div className="roomdetail-body">
					<h5>房间设施</h5>
					<div className="equipment content-container">
						<li className="on">
							<span>{newData.sheShi.Toilet}</span>
						</li>
						<li className="on">
							<span>{newData.sheShi.zaoCan}</span>
						</li>
					</div>
					<h5>房间介绍</h5>
					<div className="description content-container">
						<ul>
							<li>
								<span>房间面积:</span>
								<span>{newData.jieShao.Area}</span>
								<span>m²</span>
							</li>
							<li>
								<span>床型:</span>
								<span>{newData.jieShao.chuangXing}</span>
							</li>
						</ul>
						<article>{newData.jieShao.beiZhu}</article>
					</div>	
				</div>
				<div className="bottom-button">
					<ul>
						<li>立即购买</li>
						<li onClick={this.handleAppCartDisplay.bind(this)} id={newData.id}>加入购物车</li>
					</ul>
				</div>
				<AppDatePicker />
				<AppCart 
					DetailsData={this.state.data}
					cartId={this.state.cartId}
					handleAppCartDisplay={this.handleAppCartDisplay.bind(this)}
					AppCartDisplay={this.state.AppCartDisplay}/>
			</div>
			);
	}
}

export default AppDetail;

