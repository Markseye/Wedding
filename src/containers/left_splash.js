import React, { Component } from 'react';
import WeddingInfo from '../containers/wedding_info';

export default class LeftSplash extends Component {
  render() {
  	//when you hover over this, name dissapears and details show
	return(
	  <div className='splash-left-window'>
	  <WeddingInfo />
	  </div>
	)
  }
}
