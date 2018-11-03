import React, { Component } from 'react';
import Hamburger from './hamburger';
import pb from "../images/pb.png";
import cnb from "../images/cnb.png";
import bbb from "../images/bbb.png";

export default class Registry extends Component {

	render(){
		return(
			<div className="App">
				<Hamburger />
				<div className="registry">
					<div className="registry-splash-name registry-title">Coming Soon!</div>
						<ul className="registry-items">
						<li><img alt="cnb" className="circle registry-circle" src={cnb} /></li>
						<li><img alt="bbb" className="circle registry-circle" src={bbb} /></li>
						</ul>
				</div>
			</div>
		)
	}
};
