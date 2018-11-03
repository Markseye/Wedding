import React, { Component } from 'react';
import WeddingInfo from '../containers/wedding_info';
import Story from '../containers/story'

export default class LeftSplash extends Component {
  render() {
  	//when you hover over this, name dissapears and details show
	return(
		<div>
	  	<WeddingInfo />
	  	<div className="howWeMet"><h2> How We Met</h2></div>
	  	<Story />
	  </div>
	)
  }
}
