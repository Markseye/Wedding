import React, { Component } from 'react';

export default class TopNav extends Component {
  render() {
    return (
      <div className="topNav">
      	{dropLinks}
      </div>
    );
  }
}

const dropdownLinks = {};
dropdownLinks["Home"] = "/";
dropdownLinks["Details"] = "/details";
dropdownLinks["Wedding Party"] = "/weddingparty";
dropdownLinks["Registry"] = "/registry";

const pageLinks = Object.entries(dropdownLinks).map(
  ([page, link]) => {
  return (
  <li className="topNav-item" key={page}>
		<a href={link}>{page}</a>
	</li>)
});

const dropLinks = (
  <ul className="topNav-links-wrapper">
    { pageLinks }
  </ul>
  )