import React, { Component } from 'react';
import Hamburger from './hamburger';
import Countdown from './countdown';
import wedding_rings from "../images/wedding_rings.png";
import hotel from "../images/hotel.png";
import calendar from "../images/calendar.jpg";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
    <div className="Details-background">
      <Hamburger />
       <div className="Details">
        <div className="details-header">Details</div>
      </div>
      <div className={this.state.isOpen? "detail-list-wrapper details-list-wrapper-expanded" : "detail-list-wrapper"}>
      <ul className="details-list">
        <li className="details-list-item">
          <div className="details-list-item-title"> Where </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=John+James+Audubon+Center+at+Mill+Grove">
            <img alt="rings" className="details-icons wedding-icon" src={wedding_rings} />
          </a>
          <br />John James <br /> Audubon Center
        </li>
        <li className="details-list-item">
          <div className="details-list-item-title"> When </div>
          <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnFhaW01cXVtaTVhaGE5ODNxcGFkdnNmazQgMzhvZzRkZDNxajlwOGdscTJmaWw3NXZvcTBAZw&tmsrc=38og4dd3qj9p8glq2fil75voq0%40group.calendar.google.com">
            <img alt="calendar" className="details-icons calendar-icon" src={calendar} />
          </a>
          <Countdown date={new Date()} />
        </li>
        <li className="details-list-item">
          <div className="details-list-item-title"> Lodging </div>
          <a target="_blank" rel="noopener noreferrer" href='https://doubletree3.hilton.com/en/hotels/pennsylvania/desmond-hotel-malvern-a-doubletree-by-hilton-PHLMVDT/index.html'>
            <img alt="lodging" className="details-icons hotel-icon" src={hotel} />
          </a><br /> The Desmond <br />Hotel<br /><b>Promo code: HYD</b>
        </li>
      </ul>
      <div className={ this.state.isOpen ? "chevron expanded": "chevron"} onClick={this.handleClick}>
        &rang;
      </div>
        { this.state.isOpen ? additionalDetails : null }
      </div>
    </div>
    );
  }
}

const additionalDetails = <div className="details-expanded"wrap="virtual"><b>
                          Both ceremony and reception will be held at the John James Audubon Center in Audubon, PA.
                          <ul>
                          <u>Ceremony</u>
                          <li>September 28, 2019</li>
                          <li>Start Time: 5:15 PM</li>
                          <li>Cocktail Hour: 6:00 PM - 7:00 PM</li>
                          <li>Reception: 7:00 - 11:00 PM</li>
                          </ul>
                          <ul>
                          <u>Hotel</u>
                          <li>The Desmond Hotel</li>
                          <li>Malvern, PA</li>
                          </ul>
                          <ul><u>After Party</u>
                          <li>Location: The Deck at the Desmond</li>
                          <li>Time: After the Reception</li>
                          </ul>
                          <ul><u>Transportation</u>
                          <li>There will be a shuttle running from The Desmond Hotel to the ceremony location
                          and back after the reception ends. Times are TBD.</li>
                          </ul></b>
                          </div>;