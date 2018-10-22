import React, { Component } from 'react';

export default class Countdown extends Component {

  constructor(props) {
    	super(props);
    	this.state = { numberOfDays: 0 };
  }

  calculateDays() {
    const weddingDate = new Date('September 28, 2019 18:00:00');
    const numberOfDays = Math.round((weddingDate - this.props.date)/86400000);
    return numberOfDays;
  }

  render() {
	return(
	  <div>
	   <b>{ this.calculateDays() }</b> Days!
	  </div>
	)
  }
}