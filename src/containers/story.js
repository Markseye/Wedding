import React, { Component } from 'react';
import Hamburger from './hamburger';

export default class Story extends Component {
  render() {
    return (
      <div className="Story">
      <Hamburger />
      	{detailsInfo}
      </div>
    );
  }
}

const detailsInfo = 
  <div className="story">
  	<div>
  	  Firstly, Special Thanks to all our Friends and Family. We are so happy to be able to spend this day with everyone.
  	</div>
    <div> How we meet </div>
    <p>Through our friends James and Jaime Mezzadri, we were set up on a blind Alpha Phi function. A function that was the night
       of Mark's brother's rehearsal dinner. He ended up leaving a bit early after getting the blessing from his brother, John.
       He didn't know how important that decision would be in his brother's life. That night, Mark would show up to Home Properties in Villanova,
       to pregame with James, Jaime, James, and his blind date, Katherine. We ended up having a great night at Paddywhack's,
       which gave mark enough courage to ask Katherine on their first date, Frozen Yogurt. This led to multiple dates in Villanova's cafeteria,
       the PIT, where Mark was nice enough to get one of his fraternity pledge's to give Katherine a free swipe so that she could enter the cafeteria.
    </p>
    <div> The proposal </div>

    <p></p>
    <div> Now </div>
    <p>Now, Mark and Katherine live together in NYC</p>
  </div>