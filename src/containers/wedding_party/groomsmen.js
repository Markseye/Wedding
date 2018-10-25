import React, { Component } from 'react';
import bus from "../../images/bus.PNG";
import bus1 from "../../images/bus1.PNG";
import craw from "../../images/craw.PNG";
import craw1 from "../../images/craw1.jpg";
import dyl from "../../images/dyl.PNG";
import dyl1 from "../../images/dyl1.jpg";
import eli from "../../images/eli.jpg";
import eli1 from "../../images/eli.PNG";
import james from "../../images/james.PNG";
import james1 from "../../images/james1.PNG";
import john from "../../images/john.PNG";
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
			<div className="all-people	">
			<div className="details-header">
				Groomsmen
			</div>
				<ul className="people-info">
					{allDetails}
				</ul>
			</div>
		)
	}
}

const blurbJohn = "John is Mark's older brother and best man. He's fiercely competitive, but also loyal. He's always had Mark's back, even after many fights over who was better at football, baseball or pretty much any other sport. He's still just as competitive, but likes to use most of his energy towards spending time with his two sons, Jordan and Leo, and his wife, Marilyn."

const John = { title: "Best Man",
							 name: "John Ioannidis",
							 images: {formal: john, funny: john1},
							 blurb: blurbJohn }
const Justin = { name: "Justin Hyde",
								 images: {formal: justin,
								 funny: justin1},
								 blurb: "Justin is Katherine's older (and only) brother. Mark was nervous to first meet him, but he's been supportive of Mark since the beginning and has made his transition into the family that much easier (even though he is a Cowboys fan)."}
const Nick = { name: "Nick Busillo",
							 images: {formal: bus, funny: bus1},
							 blurb: "Nick has been friends with Mark ever since the summer of high school graduation, when Mark stole his bed at 103 Victoria Lane. Bus has been following him ever since, even joining Mark at StreetEasy to only be a floor away every day at work."}
const Eli = { name: "Elijah Everett", images: {formal: eli, funny: eli1},
							blurb: "Elijah was one of the first people Mark met at Villanova, living just next door to Mark's freshman year dorm. They immediately clicked and never looked back. They roomed together junior and senior year of college (even though Elijah almost burned down the apartment) and continued their friendship after graduation. Elijah continued on to grad school at Wake Forest, and Mark visted to see what the southern football schools were all about. Elijah has since moved a few times, bouncing between Charlotte and Atlanta, but has kept close with Mark and the NYC crew, visiting as frequently as he can."}
const James = { name: "James Mezzadri",
								images: {formal: james, funny: james1},
								blurb: "James is another one of Mark's Villanova friends and the husband of Katherine's Maid of Honor, Jaime. They spent an uncountable number of hours together as Villanova electrical engineering students during junior and senior year, and Mark could often be found at James' house trying to finish homework - or more likely waiting for James to figure out first what was going on."}
const Ronnie = { name: "Ronnie Weiss",
								 images: {formal: ron, funny: ron1},
								 blurb: "Ronnie is also one of Mark's Villanova's friends, and his first west coast friend. For Mark, being from the bubble of Delaware County, knowing people from Las Vegas was unheard of. Mark and Ronnie were close throughout college, but became even better friends post-graduation. Before moving to NYC, Mark would visit and sleep on Ronnie's couch, eventually deciding to make the move after a few (long and late) weekends."}
const Marc = { name: "Marc Pierangelli",
							 images: {formal: p, funny: p1},
							 blurb: "Marc (a.k.a. \"P\") is one of Mark's oldest friends from high school. He spells his name differently (the wrong way), but we still let him hang out with his. He's the first guy to hand you a koozie for your beer and then stick around to talk to you about anything. He's also a loving a father to his very cute daughter, Paige."}
const Crawford = { name: "Crawford Clarke",
									 images: {formal: craw, funny: craw1},
									 blurb: "Crawford and Mark met freshman year at Villanova. Even though he lived in a different dorm and is a Giants fan, they quickly bonded over music. They have been close ever since and ended up joining the same fraternity, which only continued to make them closer. Crawford even introduced Mark to his favorite Philadelphia bar in NYC, Wogies (which is now a staple)."}
const Dylan = { name: "Dylan Carroll",
								images: {formal: dyl, funny: dyl1},
								blurb: "Dylan was also part of Mark's fraternity at Villanova. They had always been close, but became much closer after Mark moved to NYC. So close in fact, that Dylan is basically Katherine's second boyfriend, since they work only a block away from each other and grab coffee on just about a weekly basis. He is always down to \"cruise the block\", grab some espresso, and go out dancing."}

const guys = { John, Justin, Nick, Eli, James, Ronnie, Marc, Crawford, Dylan };

let allDetails = [];
// let guy;

Object.entries(guys).forEach(([guy, values]) => {
	let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    // backgroundImage: `url(${allie})`,
    backgroundSize: 'center'
  };
	allDetails.push(<li className="people-info-item" key={values.name}>
		<h2>{values.name}</h2>
		<img alt="groomsmen" 
		className="circle" style={styles} src={`${values.images["formal"]}`} onMouseOver={e => (e.currentTarget.src = `${values.images["funny"]}`)} onMouseOut={e => (e.currentTarget.src = `${values.images["formal"]}`)} />
		{ values.title ? <h4>{values.title}</h4> : ""}
		<p className="people-info-paragraph">{values.blurb}</p>
	</li>)
});

