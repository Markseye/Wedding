import React, { Component } from 'react';
import Dropdown from './dropdown';

export default class Hamburger extends Component {
  constructor(props) {
    	super(props);
    	this.state = {isToggleOn: false};
    	this.handleClick = this.handleClick.bind(this);
  	}

  	handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
	  return(
      <div className="side-nav">
	      <div className='hamburger-container' onClick={this.handleClick}>
	        { this.state.isToggleOn ? <Dropdown /> : hamburger }
	      </div>
      </div>
	)
  }
}

const hamburger = <div>
				  <div className='bar1'></div>
				  <div className='bar2'></div>
				  <div className='bar3'></div>
				  </div>;