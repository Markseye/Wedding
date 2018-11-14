import React, { Component } from 'react';
import Groomsmen from './wedding_party/groomsmen';
import Bridesmaids from './wedding_party/bridesmaids';
import Hamburger from './hamburger';

export default class Party extends Component {

  render() {
    return (
    	<div className="party-page">
    		<Hamburger /> 
      	<div className="party-container">
        	<Bridesmaids />
        	<Groomsmen />
      	</div>
      </div>
    );
  }
}
