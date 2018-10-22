import React, { Component } from 'react';
import Hamburger from './hamburger';


export default class Registry extends Component {

	render(){
		return(
			<div>
				<Hamburger />
				<div className="registry">
					<div className="splash-name registry-title">Coming Soon!</div>
				</div>
			</div>
		)
	}
};
