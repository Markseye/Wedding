import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
	  static propTypes = {
    	values: PropTypes.object.isRequired
  	};

 render() {
	return (
  	<div className="modal">
  		THIS IS THE MODAL
  		<button onClick={this.props.onClose}>
              Close
  		</button>
  	</div>
 	)
	}
}