import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown">
      	<div>X</div>
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
  <li className="dropdown-link" key={page}>
		<a href={link}>{page}</a>
	</li>)
});

const dropLinks = (
  <ul className="dropdown-link-container">
    { pageLinks }
  </ul>
  )