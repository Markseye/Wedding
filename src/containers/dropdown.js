import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div>
      	<div><a>X</a></div>
      	{dropLinks}
      </div>
    );
  }
}

const dropdownLinks = {};
dropdownLinks["Home"] =  process.env.PUBLIC_URL + "/";
dropdownLinks["Details"] = process.env.PUBLIC_URL + "/#/details";
dropdownLinks["Wedding Party"] = process.env.PUBLIC_URL + "/#/weddingparty";
dropdownLinks["Registry"] = process.env.PUBLIC_URL + "/#/registry";

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