import React from 'react';
import {Link} from 'react-router';
import AppZhuSuItems from '../AppZhuSuItems/AppZhuSuItems';
require ('./AppZhuSu.css');

class AppZhuSu extends React.Component{
	render(){
		// console.log(this.props.DetailsData);
		if(!Array.isArray(this.props.DetailsData)) throw new Error('this.props.DetailsData问题必须是数组');
		
		let ZhuSuItems=this.props.DetailsData.map(function(value,index){
			return (
				<AppZhuSuItems  key={index}
								title={value.title}
								id={index}
								kezhu={value.number}
								suoimgurl={value.pics[0].url}
								price={value.price} 
								handleAppCartDisplay={this.props.handleAppCartDisplay}/>
				);
		}.bind(this));
		
		return (	
			<div className="AppZhuSu">
				<p className="AppZhuSu_tittle">住宿</p>
					{ZhuSuItems}
				<div className="container wqcontainer">
					<Link to="/rooms">查看更多</Link>
				</div>
			</div>	
			);
	}
}

export default AppZhuSu;