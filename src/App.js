import React, { Component } from 'react';
import './App.css';
import LeftSplash from './containers/left_splash';
import Hamburger from './containers/hamburger';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hamburger/>
        <LeftSplash/>
      </div>
    );
  }
}