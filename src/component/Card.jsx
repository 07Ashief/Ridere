import React, { Component } from "react";
import "./Card.css"; // Correct the import path
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

class LandingPgePart extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid cardSec " id="maincontainer">
          <div id="matter">
            <Slide direction="up" >
              <h1>Your journeys are simply a click away</h1>
            </Slide>
            <Slide direction="up" >
              <p>
                RIDERE turns your travel into an exciting and effortless<br />
                adventure, making your destination even more enjoyable.
              </p>
            </Slide>
          </div>

          <Zoom triggerOnce={true}>
            <div className="row" id="AllBoxes">

              <div className="col-lg-3 col-md-12 col-sm-1 mobiView" id="box-1">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>For Efficiency</h5>
                </div>
                <p>RIDERE streamlines rides for swift commutes.</p>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-1 mobiView" id="box-2">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>Affordability</h5>
                </div>
                <p>Enjoy cost-effective transportation &nbsp;&nbsp;&nbsp;</p>
              </div>


              <div className="col-lg-3 col-md-12 col-sm-1 mobiView" id="box-3">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>Reliability</h5>
                </div>
                <p>Count on punctual, dependable service</p>
              </div>

            </div>
          </Zoom>

        </div>
      </div >
    );
  }
}

export default LandingPgePart;
