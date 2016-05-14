import React from 'react';
import AppZhuSuItems from 'components/AppZhuSuItems';

class AppZhuSu extends React.Component{
	render(){
		console.log(this.props.DetailsData);
		if(!Array.isArray(this.props.DetailsData)) throw new Error('this.props.dataTips问题必须是数组');
		
		let zhusuitems=this.props.DetailsData.map(function(value,index){
			<AppZhuSuItems  key={index}
							title={value.title}
							kezhu={value.number}
							suoimgurl={value.pics[0].url}
							price={value.price}/>
		}.bind(this));
		return (	
			<div className="AppZhuSu">
				<p className="AppZhuSu_tittle">住宿</p>
					{zhusuitems}
				<div className="container wqcontainer">
					<a className="" href="">查看更多</a>
				</div>
			</div>	
			);
	}
}

export default AppZhuSu;