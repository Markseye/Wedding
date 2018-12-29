import React, { Component } from 'react';
import nick from "../../images/lore.JPG";
import nick1 from "../../images/lore1.JPG";

export default class Officiant extends Component {
	defaultState = {
		img: "formal"
	}

	state = {
		img: ""
	}

	render() {
		return (
			<div className="new-all-people">
				<div className="details-header">
					Meet the Officiant
				</div>
				<div className="new-people-info">
					{allDetails}
				</div>
			</div>
		)
	}
}

const Nick = {  name: "Nick LoRe",
								images: { formal: nick, funny: nick1 },
								blurb: "Nick is one of Mark's Villanova friends. He was in Mark's fraternity and his senior year roommate along with Elijah. Being Mark's roommate when he started dating Kat, he was one of the first to get to know her and see the two as a couple. It only seemed fitting that Nick marry the two. That and the fact that he may be our only friend with their officiant license (shiny business card and all). Nick's always been a good friend to us, so it means a lot that he would be willing to preside over our marriage."}

const girls = { Nick };

let allDetails = [];

const openModal = (img, blurb) => {
	var modalDiv = document.createElement("div")
	modalDiv.classList.add("modal");
	var image = document.createElement("img");
	image.classList.add("modal-image");
	// image.classList.add("circle");
	image.src = img;
	var close = document.createElement("div")
	var closeText = document.createTextNode("Close");
	close.appendChild(closeText);
	close.onclick = function () {
    modalDiv.classList.add("display-none");
	};
	close.classList.add("modal-close");
	var par = document.createElement("p");
	par.classList.add("modalTextContainer");
	par.innerHTML = blurb;
	modalDiv.appendChild(close);
	modalDiv.appendChild(image);
	modalDiv.appendChild(par);
	document.body.appendChild(modalDiv);
}

Object.entries(girls).forEach(([girl, values]) => {
	let image = values.images["formal"];
	allDetails.push(<div className="new-people-info-item" key={values.name} onClick={openModal.bind(null, image, values.blurb)}>
		<img alt="officiant" className="circle people-circle" src={`${values.images["formal"]}`} onMouseOver={e => (e.currentTarget.src = `${values.images["funny"]}`)} onMouseOut={e => (e.currentTarget.src = `${values.images["formal"]}`)} />
		<h3>{values.name}</h3>
		{ values.title ? <h4>{values.title}</h4> : ""}
	</div>)
});