import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
// dropdownLinks["Our Story"] = "/ourstory";
dropdownLinks["Registry"] = "/registry";
console.log(dropdownLinks);

//add link

// Object.entries(obj).forEach(
//     ([key, value]) => {
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