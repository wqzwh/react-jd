require('styles/AppDetail.css');
require('styles/AppDatePicker.css');
require('styles/AppCart.css');

import React from 'react';
import HeadNav from 'components/HeadNav';
import AppCart from 'components/AppCart';
import AppDatePicker from 'components/AppDatePicker';

// 引入json数据
let Details=require('../data/Detail.json');

class AppDetail extends React.Component{
	render(){
		console.log(this.props.params);
		return (
			<div className="detail">
				<HeadNav />
				<div className="slider">
					<div className="slick-initialized slick-slider">
						<div className="slick-list">
							<div className="slick-track">
								<div className="slick-slide slick-active slider-img" data-index="-1"></div>
							</div>
						</div>
						<ul className="slick-dots">
							<li className="">
								<button>1</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="title">
					<div className="desc">
						<h3>海边独栋木屋</h3>
						<h4>
							<span>可住</span>
							<span>3</span>
							<span>人</span>
						</h4>
					</div>
					<div className="price">
						<span>￥</span>
						<b>
							<span>0.01</span>
							<span>/晚</span>
						</b>
					</div>
				</div>
				<div className="roomdetail-body">
					<h5>房间设施</h5>
					<div className="equipment content-container">
						<li className="on">
							<span>看，界面</span>
						</li>
					</div>
					<h5>房间介绍</h5>
					<div className="description content-container">
						<ul>
							<li>
								<span>房间面积:</span>
								<span>6</span>
								<span>m²</span>
							</li>
							<li>
								<span>床型:</span>
								<span>6666</span>
							</li>
						</ul>
						<article>buyunxudaichongwu</article>
					</div>	
				</div>
				<div className="bottom-button">
					<ul>
						<li>立即购买</li>
						<li>加入购物车</li>
					</ul>
				</div>
				<AppDatePicker />
				<AppCart />
			</div>
			);
	}
}

export default AppDetail;

