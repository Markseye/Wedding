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
      <div className={this.state.isOpen? "details-list-wrapper-expanded" : "detail-list-wrapper"}>
      <ul className="details-list">
        <li className="details-list-item">
          <div className="details-list-item-title"> Where </div>
          <a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=John+James+Audubon+Center+at+Mill+Grove">
            <img className="details-icons wedding-icon" src={wedding_rings} />
          </a>
          <br />John James <br /> Audubon Center
        </li>
        <li className="details-list-item">
          <div className="details-list-item-title"> When </div>
          <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NnFhaW01cXVtaTVhaGE5ODNxcGFkdnNmazQgbWFyay5pb2FubmlkaXNAbQ&amp;tmsrc=mark.ioannidis%40gmail.com">
            <img className="details-icons calendar-icon" src={calendar} />
          </a>
          <Countdown date={new Date()} />
        </li>
        <li className="details-list-item">
          <div className="details-list-item-title"> Lodging </div>
          <a target="_blank" href='https://doubletree3.hilton.com/en/hotels/pennsylvania/desmond-hotel-malvern-a-doubletree-by-hilton-PHLMVDT/index.html'>
            <img className="details-icons hotel-icon" src={hotel} />
          </a><br /> The Desmond<br /><b>Promo code: HYD</b>
        </li>
      </ul>
      <div className={ this.state.isOpen ? "chevron expanded": "chevron"} onClick={this.handleClick}>
        &rang;
      </div>
      { this.state.isOpen ? additionalDetails : null }
      </div>
      </div>
    </div>
    );
  }
}

const additionalDetails = <div><b>
                          Both Ceremony and reception will be held at The John James Audubon Center.
                          <ul>
                          <u>Ceremony</u>
                          <li>Start Time: 5:15 PM</li>
                          <li>Cocktail Hour: 6:00 PM - 7:00 PM</li>
                          <li>Reception: 7:00 - 11:00 PM</li>
                          </ul>
                          <ul><u>After Party</u>
                          <li>Location: The Deck at the Desmond</li>
                          <li>Time: After the Reception</li>
                          </ul>
                          <ul><u>Transportation</u>
                          <li>There will be a shuttle running from the Desmond Hotel to the Ceremony Location
                          and back after the reception ends. Times are TBD</li>
                          </ul></b>
                          </div>;