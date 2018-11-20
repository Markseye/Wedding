import React, { Component } from 'react';
import Hamburger from './hamburger';
import cnb from "../images/cnb.png";
import bbb from "../images/bbb.png";

export default class Registry extends Component {

	render(){
		return(
			<div className="App">
				<Hamburger />
				<div className="registry">
					<ul className="registry-items">
					<li><a href="https://www.crateandbarrel.com/gift-registry/mark-ioannidis-and-katherine-hyde/r5904967"><img alt="cnb" className="circle registry-circle" src={cnb} /></a></li>
					<li><a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/546730347"><img alt="bbb" className="circle registry-circle" src={bbb} /></a></li>
					</ul>
				</div>
			</div>
		)
	}
};
