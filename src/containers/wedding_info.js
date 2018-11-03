import React, { Component } from 'react';

export default class WeddingInfo extends Component {
  constructor(props) {
    	super(props);
    	this.state = {isToggleOn: false};
    	this.handleHover = this.handleHover.bind(this);
  	}

  	handleHover() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
	return(
    <div className='pane1'>
	    <div className='splash-name'>
		    Mark & Kat
      </div>
      <div className='splash-date'>
        <hr /> The Wedding - 09/28/19 <hr />
      </div>
    </div>
	)
  }
}

