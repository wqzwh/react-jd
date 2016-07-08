import React from 'react';
require ('./AppTopCon.css');
class AppTopCon extends React.Component{
	render(){
		return (
			<div className="campInfo">
				<div className="campInfo-coverPhoto"></div>
				<div className="container campInfo-campName">阿沛的营地</div>
				<div className="container campInfo-info">
					<div className="campInfo-phone">
						<img className="icon" src="../images/phone.png" />
						<article>13325588888</article>
					</div>
					<div className="campInfo-address">
						<img className="icon" src="../images/addres.png" />
						<article>安徽安庆安庆市农家小院</article>
					</div>
				</div>
				<div className="container campInfo-notice">
					<img className="icon campInfo-noticeIcon" src="../images/notice.png" />
					<div className="campInfo-noticeContent">
						<article>暂无公告</article>
						<p></p>
					</div>
				</div>
			</div>
			);
	}


}

export default AppTopCon;