import React, { Component } from 'react';
import Tabs from './tabs';
import mark from "../images/mark.jpg";
import kitty from "../images/kat.PNG";
import one from "../images/2.jpg";
import two from "../images/3.jpg";
import three from "../images/27.PNG";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/14.jpg";
import eight from "../images/19.jpg";
import nine from "../images/20.jpg";
import ten from "../images/13.jpg";
import eleven from "../images/11.jpg";
import twelve from "../images/22.jpg";
import thirteen from "../images/24.jpg";
import fourteen from "../images/26.jpg";
import fifteen from "../images/15.jpg";

export default class Story extends Component {
  render() {
    return (
      <div styles="width: 100%;">
        <div className="pane2 padding10">
          <Tabs> 
            <div label="His Version">
                <img alt="mark" className="circle people-circle" src={mark}/>
                <p>Thanks to our friends James and Jaime Mezzadri, we were set up on a blind date to an Alpha Phi sorority function at Villanova.
                   This was no ordinary function because this was also the night of my (only) brother's rehearsal dinner.
                   My brother, John, was gracious enough to allow me to leave the dinner a bit early in order to make it in time for the function.
                   Neither of us knew at the time how important that decision would be. That night, I showed up to Jaime's apartment to find James, Jaime, and my blind date, Katherine. I may have only seen Katherine once or twice out before, but never had gotten up enough confidence to talk to her.
                   Luckily for me this was my opportunity. I remember one of the first things I noticed was that it didn't seem like she was wearing any makeup, which to this day is when I always say she looks the prettiest.
                   Initially, the night started with some small talk as I mostly hung out with James as Katherine and Jaime finished getting ready and catching up.
                   As the night went on and everyone was feeling a little more comfortable (thanks to some liquid courage), the conversations between us began to flow a little easier. I remember dancing a lot and just overall both of us having a great night at Paddywhack's in downtown Philly. This night gave me enough courage to ask Katherine on our first date, which was at Kiwi Yogurt.
                   This led to our second date at one of Villanova's finest establishments, the PIT cafeteria, where in true college fashion I was able to get one of my fraternity pledges to give Katherine a free meal.
                   We had countless more late nights out at bars on the Main Line, sorority and fraternity functions, and many other great memories from our time in college that I look back on and treasure.
                   With the good, also comes the bad, but we managed to get through it (even when she locked me out of her apartment in the pouring rain 😂🌧️😭 )
                   and it only made us stronger, getting us through years of a long distance relationship and being apart for months at a time. This all led up to this moment, and I wouldn't have it any other way. I love you, Katherine 😘😘.
               </p>
            </div>
            <div label="Her Version">
              <img alt="kitty" className="circle people-circle" src={kitty} />
                <p>It was junior year at Villanova, and I needed a date to a sorority function the next day. Nothing like the last minute. As usual, Jaime (now my Maid of Honor) came to my rescue and mentioned she had someone in mind for me; it was music to my ears considering time was not on my side.
                I remember she described him primarily as “fun”, and she pretty much guaranteed that I’d have a good time, which at that point (especially given that we had less than 24 hours before the function) was my main priority.
                He was friends with James through Villanova engineering, and Jaime mentioned if it didn’t go well between us that he’d know James and plenty of other people there, so no pressure.
                Jaime went through with organizing the setup and invited both of us over to her apartment the next night before our function to get ready, have some drinks, and get to know one another. I remember before meeting Mark that night, as I was getting ready with Jaime, I admitted that I was super nervous. But once Mark and I met and got to know each other more that evening, those nerves seemingly went away. We danced all night and had an amazing time. After that night, I was a little skeptical about how (or if) this would move forward; Mark was definitely the popular one with a million friends, and I was, well, not. But Mark took me out for several dates to get to know me even better and started introducing me to his roommates, friends, and family. I was told by many people that this was something Mark would definitely not do with just anyone. Exactly one month after we first met, Mark asked me to be his girlfriend, and I realized in that moment he had somehow won me over with his contagious personality that was completely opposite to mine - relaxed, calm, and spontaneous, without a worry in the world. Ever since then, we’ve been inseparable, and we’ll be getting married exactly 8 years to the day we first met for that Alpha Phi function.
                Mark has proven to be an amazing partner; he keeps me laughing, puts everything into perspective, and reminds me to enjoy life in every moment.
                I’d still use the word “fun” first in my description of Mark, followed by kind, generous, and with this unparalleled ability to see the best in everyone and to light up the darkest room. Mark, I can’t wait to marry you and to spend the rest of our lives together.</p>
            </div>
          </Tabs>
        </div>
        <div className="pane2">
          <div className="row">
            <div className="column">
              <img src={one} />
              <img src={two} />
              <img src={three} />
            </div>
            <div className="column">
              <img src={four} />
              <img src={five} />
              <img src={six} />
            </div>
            <div className="column">   
              <img src={seven} />
              <img src={eight} />
              <img src={nine} />
            </div>
            <div className="column">
              <img src={ten} />
              <img src={eleven} />
              <img src={twelve} />
            </div>
            <div className="column">
              <img src={thirteen} />
              <img src={fourteen} />
              <img src={fifteen} />
            </div>
          </div>
        </div>

        <div className="pane2 greyBackground padding10">
          {detailsInfo}
        </div>
        <div className="pane2 padding10">
        <div className="story">
          <h3> Now </h3 >
          <p>Now, Mark and Katherine live together in NYC. The wedding planning is nearly complete, mostly thanks to Katherine's organization skills and need to have
          everything done way ahead of schedule. We are so excited to
          have all of you together to celebrate officially starting our lives together! See you soon!
          </p>
        </div>
        </div>
      </div>
    );
  }
}

const detailsInfo = 
<div className="story">
  <div>
    <h3> The proposal, as told by Mark </h3>
    <p>When thinking about where to get engaged, it had to be somewhere that was special to us. Aruba is our favorite tropical island and was the first
    real vacation we had outside of the country as a couple (with James and Jaime) a few years ago. We had already talked about going a second time together, so I thought this could be the perfect time to propose. After getting Katherine's Dad's permission that summer, fast forward to March 2018 when our second Aruba adventure began.
    I was nervously carrying the ring through airport
    security, hoping I didn't get stopped and searched in front of Katherine, exposing the plan. Luckily, I got through without any issues, and we arrived smoothly. 
    I knew I wanted to propose on the beach at sunset (since Aruba's sunsets are unbeatable), so on the first day I scouted out a location to propose where Jaime and James could still pop out
    and take photos to document the moment. Luckily, I found a nice little private inlet away from most of the commotion on the beach, so I knew I had found the perfect spot. Fast forward another 24-hours and it was almost sunset. In an effort to escape and start prepping, Jaime said
    that her and James were going to meet family who just so happened to be on the island at the same time, and that they'd meet us a bit later in the evening. Katherine's gullibility fell right for this story. While they were making their way
    to the inlet to get the cameras ready, we hung back at the hotel for another few minutes until I suggested going for a walk on the beach while we waited for Jaime and James to return from their "time with family". Knowing Katherine,
    I was fairly confident she would be all for this idea, and I was right. We walked down to the beach, hand in my pocket clasping the ring the entire time. We slowly made our way to the location, as I tried to make everything seem less suspicious. We made it down to the inlet as I got down on one knee. Katherine immediately started crying, the Mezzadri photographers popped out of the brush to capture the moment, and the rest is history...
    </p>
  </div>
</div>

