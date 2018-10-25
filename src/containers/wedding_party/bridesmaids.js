import React, { Component } from 'react';
import allie from "../../images/allie.jpg";
import allie1 from "../../images/allie1.jpg";
import bri from "../../images/bri.png";
import bri1 from "../../images/bri1.PNG";
import casey from "../../images/casey2.PNG";
import casey1 from "../../images/casey1.png";
import jaime from "../../images/jaime2.PNG";
import jaime1 from "../../images/jaime1.jpg";
import kara from "../../images/kara.png";
import kara1 from "../../images/kara1.jpg";
import liv from "../../images/liv2.png";
import liv1 from "../../images/liv1.png";
import marilyn from "../../images/marilyn.png";
import marilyn1 from "../../images/marilyn1.PNG";
import nat from "../../images/nat2.PNG";
import nat1 from "../../images/nat1.jpg";

export default class Bridesmaids extends Component {
	defaultState = {
		img: "formal"
	}

	state = {
		img: ""
	}

	render() {
		return (
			<div className="all-people">
				<div className="details-header">
					Bridesmaids
				</div>
				<ul className="people-info">
					{allDetails}
				</ul>
			</div>
		)
	}
}

const Jaime = { title: "Maid Of Honor",
								name: "Jaime Rose Mezzadri",
								images: { formal: jaime, funny: jaime1 },
								blurb: "Jaime is Katherine's Maid of Honor. They met during Katherine's sophomore year when she joined Alpha Phi at Villanova University and was matched with Jaime as the absolute best \"big\". Jaime has not only acted like Katherine's \"big sister\", but also as her best friend through the years - she even went as far as playing matchmaker by setting up Katherine and Mark as last-minute dates for a sorority function. It all came full circle when Jaime played a key role in Mark's proposal and was there to witness and celebrate their engagement in Aruba."}
const Marilyn = { name: "Marilyn Ioannidis",
									images: { formal: marilyn, funny: marilyn1},
									blurb: "Marilyn is Mark's sister-in-law, but has also acted like family to Katherine since the beginning. She was there when Katherine met \"the family\" for the first time back in 2011 and has been so welcoming ever since. Through ski trips, Atlantic City trips, or just regular \"Hey, we're visiting this weekend, can we stay over\" trips, Marilyn has been there through it all, teasing Mark and Katherine to move back home the whole time."}
const Natalie = { name: "Natalie Monti",
									images: { formal: nat, funny: nat1 },
									blurb: "Natalie was one of Katherine's very first sorority friends (Fall '10), and the two of them clicked instantly. They also have shared strangely similar moves - moving out of Villanova into Manayunk, out of Manayunk into The Drake in Center City Philly, and moving to the Lower East Side in NYC (and then elsewhere in NYC) all around the same time - so the two have been inseparable for years. Natalie treats everyone she loves like her closest family, and Katherine and Mark have been no exception."}
const Allie = { name: "Allie Casparius",
								images: { formal: allie, funny: allie1},
								blurb: "Although the two often forget, Allie and Katherine didn't meet until senior year at Villanova. They both got job offers around the same time in the Philly area, so they decided to take a chance on each other and live together in Manayunk. It ended up being the best decision they could make, as they remained roommates throughout their time in Manayunk and moved in together at The Drake in Philly. The two often dreamed about working and living in NYC, so it was no surprise that when Allie got a job in NYC and Katherine did too soon after, they decided to become roommates once more and take on a whole new city together; the two have become even closer with every move."}
const Casey = { name: "Casey Forman",
								images: {  formal: casey, funny: casey1},
								blurb: "Casey and Katherine met through Alpha Phi and as many do with Casey, became friends right away. Katherine and Casey became especially close senior year when Katherine became the \"house kat\" at Casey's senior year house, finding a new bed on her futon for those late weekend (and weekday) nights. Through trips to Casey's lake house, visiting between cities, and now living nearby in NYC, the two have still hung out constantly on late weekend (and weekday) nights."}
const Kara = { name: "Kara O'Halloran",
							 images: {formal: kara, funny: kara1},
							 blurb: "Kara is one of Katherine's oldest Villanova friends. The two met freshman year at Villanova when they were living at St. Mo's right down the hall from each other and practically became unofficial roommates ever since, living together throughout Villanova and also as neighbors in Manayunk and Philly. Despite the distance that living in NYC and Philly has physically created, both Kara and Katherine continue to dedicate weekends to seeing each other and having their own versions of food and cocktail tours through each city. Hotel Kara (the.best.ever.) has also become Katherine's permanent residence whenever she visits Philly."}
const Bri = { name: "Brianna Panasewicz",
							images: { formal: bri, funny: bri1},
							blurb: "Brianna and Katherine also didn't really get to know each other until they were roommates in Manayunk after graduation, but that didn't stop them from instantly becoming friends. Through living together and carpooling together to work a few days a week, to Belmar beach weekends in the summer and Antimo's Italian food in the winter, to frequent visits between NYC and Philly, Katherine and Bri's friendship has grown so much in just a few years."}
const Olivia = { name: "Olivia Murawski Freed",
								 images: { formal: liv, funny: liv1},
								 blurb: "Olivia and Katherine met sophomore year through Alpha Phi. The two really became close when Olivia came back from her time away at Oxford, and Katherine once again became the \"house kat\" at Olivia's senior year house. Through functions together, \"darties\", Fort Myers for spring break, and everything in between, Olivia and Katherine became amazing friends. Even when Olivia moved to Chicago and then to North Carolina (and now back to Chicago), the two often call and visit each other, and they pick up right where they left off whenever they see one another."}
const girls = { Jaime, Marilyn, Natalie, Allie, Casey, Kara, Bri, Olivia };
// need to append each to original
let allDetails = [];

let girl

Object.entries(girls).forEach(([girl, values]) => {
	let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    // backgroundImage: `url(${allie})`,
    backgroundSize: 'center'
  };
	allDetails.push(<li className="people-info-item" key={values.name}>
		<h2>{values.name}</h2>
		<img 	 className="circle" style={styles} src={`${values.images["formal"]}`} onMouseOver={e => (e.currentTarget.src = `${values.images["funny"]}`)} onMouseOut={e => (e.currentTarget.src = `${values.images["formal"]}`)} />
		{ values.title ? <h4>{values.title}</h4> : ""}
		<p className="people-info-paragraph">{values.blurb}</p>
	</li>)
});