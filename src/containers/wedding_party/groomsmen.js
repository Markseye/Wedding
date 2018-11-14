import React, { Component } from 'react';
import bus from "../../images/bus.PNG";
import bus1 from "../../images/bus1.PNG";
import craw from "../../images/craw.PNG";
import craw1 from "../../images/craw1.jpg";
import dyl from "../../images/dyl.PNG";
import dyl1 from "../../images/dyl2.jpg";
import eli from "../../images/eli.jpg";
import eli1 from "../../images/eli.PNG";
import james from "../../images/james.PNG";
import james1 from "../../images/james1.PNG";
import john from "../../images/john2.png";
import john1 from "../../images/john1.jpg";
import justin from "../../images/justin.jpg";
import justin1 from "../../images/justin1.jpg";
import p from "../../images/p.PNG";
import p1 from "../../images/p1.jpg";
import ron from "../../images/ron.PNG";
import ron1 from "../../images/ron1.PNG";

export default class Groomsmen extends Component {
	render() {
		return (
			<div className="new-all-people">
				<div className="details-header">
					Meet the Groomsmen
				</div>
				<div className="new-people-info">
					{allDetails}
				</div>
			</div>
		)
	}
}

const blurbJohn = "John is Mark's older brother and best man. He's fiercely competitive, but also loyal. He's always had Mark's back, even after many fights over who was better at football, baseball or pretty much any other sport. They both tease each other constantly, but know it is all out of love and laugh it off in the end. He's still just as competitive, but likes to use most of his energy towards spending time with his two sons, Jordan and Leo, and his wife, Marilyn. John is more of the 'do-it-yourselfer' of the family, where Mark would much rather pay someone for a task, or just call John for help. In typical John fashion, he would initially jokingly say no, but when push came to shove, he would always go out of his way to help Mark out."

const John = { title: "Best Man",
							 name: "John Ioannidis",
							 images: {formal: john, funny: john1},
							 blurb: blurbJohn }
const Justin = { name: "Justin Hyde",
								 images: {formal: justin,
								 funny: justin1},
								 blurb: "Justin is Katherine's older (and only) brother. Mark was nervous to first meet him, but he's been supportive of Mark since the beginning and has made his transition into the family that much easier (even though he is a Cowboys fan). After all these years, Mark sees Justin as his own brother and always enjoys his company."}
const Nick = { name: "Nick Busillo",
							 images: {formal: bus, funny: bus1},
							 blurb: "Nick has been friends with Mark ever since the summer of high school graduation, when Mark stole his bed at 103 Victoria Lane. Bus has been following him ever since, even joining Mark at StreetEasy to only be a floor away every day at work. Nick is Mark's Philly connection in NYC and during any Eagles game can be found pacing and cheering right next to Mark."}
const Eli = { name: "Elijah Everett", images: {formal: eli, funny: eli1},
							blurb: "Elijah was one of the first people Mark met at Villanova, living just next door to Mark's freshman year dorm. They immediately clicked and never looked back. They roomed together junior and senior year of college (even though Elijah almost burned down the apartment) and continued their friendship after graduation. Elijah continued on to grad school at Wake Forest, and Mark visted to see what the southern football schools were all about. Elijah has since moved a few times, bouncing between Charlotte and Atlanta, but has kept close with Mark and the NYC crew, visiting as frequently as he can."}
const James = { name: "James Mezzadri",
								images: {formal: james, funny: james1},
								blurb: "James is another one of Mark's Villanova friends and the husband of Katherine's Maid of Honor, Jaime. They spent an uncountable number of hours together as Villanova electrical engineering students during junior and senior year, and Mark could often be found at James' house trying to finish homework - or more likely waiting for James to figure out first what was going on."}
const Ronnie = { name: "Ronnie Weiss",
								 images: {formal: ron, funny: ron1},
								 blurb: "Ronnie is also one of Mark's Villanova's friends, and his first west coast friend. For Mark, being from the bubble of Delaware County, knowing people from Las Vegas was unheard of. Mark and Ronnie were close throughout college, but became even better friends post-graduation. Before moving to NYC, Mark would visit and sleep on Ronnie's couch, eventually deciding to make the move after a few (long and late) weekends."}
const Marc = { name: "Marc Pierangeli",
							 images: {formal: p, funny: p1},
							 blurb: "Marc (a.k.a. \"P\") is one of Mark's oldest friends from high school. He spells his name differently (the wrong way), but we still let him hang out with us. He's a 'pop-in' pro, former O'Hara band member, and has the legendary hands of a masseur. He also works with my mom, which has helped a lot when I need to get a hold of her at work and she turns her phone off. He's the first guy to hand you a beer and then stick around to talk your ear off about basically anything. He's also a loving father to his very cute daughter, Paige."}
const Crawford = { name: "Crawford Clarke",
									 images: {formal: craw, funny: craw1},
									 blurb: "Crawford and Mark met freshman year at Villanova. Even though he lived in a different dorm and is a Giants fan, they quickly bonded over music. They have been close ever since and ended up joining the same fraternity, which only continued to make them closer. Everytime they saw each other, the conversation would eventually turn to music. They would share new songs or just sitting down and listen to an album together. Not only do they introduce each other to new music, but Crawford even introduced Mark to his favorite Philadelphia bar in NYC, Wogies (which is now a staple)."}
const Dylan = { name: "Dylan Carroll",
								images: {formal: dyl, funny: dyl1},
								blurb: "Dylan was also part of Mark's fraternity at Villanova. They had always been close, but became much closer after Mark moved to NYC. So close in fact, that Dylan is basically Katherine's second boyfriend, since they work only a block away from each other and grab coffee on a weekly basis. He is always down to \"cruise the block\", grab some espresso, and go out dancing."}

const guys = { John, Justin, Nick, Eli, James, Ronnie, Marc, Crawford, Dylan };

let allDetails = [];
// let guy;

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

Object.entries(guys).forEach(([guy, values]) => {
	let image = values.images["formal"];
	allDetails.push(<div className="new-people-info-item" key={values.name} onClick={openModal.bind(null, image, values.blurb)}>
		<img alt="groomsmen" 
		className="circle people-circle" src={`${values.images["formal"]}`} onMouseOver={e => (e.currentTarget.src = `${values.images["funny"]}`)} onMouseOut={e => (e.currentTarget.src = `${values.images["formal"]}`)} />
		<h3>{values.name}</h3>
		{ values.title ? <h4>{values.title}</h4> : ""}
	</div>)
});

