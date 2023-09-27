import React from "react";
import "./VideoComponent.css";
import { Slide, Zoom } from "react-awesome-reveal";

function Videocomponent() {

  return (
    <div className="container-fluid video1 ">
      <div className="container text-center pt-4 card1" >
        <Slide direction="up" >
          <div className="myelementSec">
            <h1>"Seamless Mobility"</h1>
          </div>
        </Slide>
        {/* <Slide direction="up" triggerOnce={true}> */}
        <div class="row align-items-center subcard1 pt-4">
          <div class="col subcard11">
            <img
              src="./images/pexels-arnie-watkins-3156482.jpg"
              alt="Image Description"
              class="imgsize"
            />
            <h5 className="nameContent">Convenience and Accessibility</h5>
          </div>
          <div class="col subcard12">
            <img
              src="./images/pexels-cesar-perez-733745.jpg"
              alt="Image Description"
              class="imgsize"
            />{" "}
            <h5 className="nameContent">Safety and Transparency</h5>
          </div>
          <div class="col subcard13">
            <img
              src="./images/pexels-yurii-hlei-1545743.jpg"
              alt="Image Description"
              class="imgsize"
            />
            <h5 className="nameContent">Affordability and Pricing {/*<br/> Transparency*/}</h5>
          </div>
        </div>

        {/* </Slide> */}

        <div className="px-4 py-5 my-5   card2">
          <Slide direction="up" >
            <div className="myelementSec">
              <h2 className="subcard2 col-lg-7  mx-auto my-4 display-9 fw-bold text-body-emphasis ">
                <span className="firstTextColor">"RIDE in Style with RIDERE" </span> <span className="secTextColor">- India's</span><br></br> Premier Bike Taxi App
              </h2>
            </div>
          </Slide>
          <div className="col-lg-7  mx-auto my-4 subcard22">
            <Slide direction="up" triggerOnce>
              <p className="lead mb-4  display-9 semicard1">
                Adopted by India, Our Bike Taxi Service We aren't just another
                option; we're the favored selection We've become the top choice
                for 10 Million riders, addressing India's intra-city commuting
                challenges. Ensuring safety and wallet-friendly rates. What Makes
                Us Stand Out? Our bike taxis seamlessly navigate through peak-hour
                congestion, swiftly taking you to your destination in no time!
                When it comes to transportation, it's all about RIDERE
              </p>
              {/* <p className="semicard2">
                <a href="adsd" className="cardbttn">
                  Start now
                </a>
              </p> */}
            </Slide>
          </div>

        </div>
      </div>
      {/* justify-content-md-center */}
      <div className=" container-fluid card3">
        <div className="row  justify-content-md-center card31 ">
          {/* <div className="col col-lg-4 col-md-11 col-sm-6 subcard3 text-align-left mt-4 "> */}
          <div className="col col-lg-4 col-md-11 col-sm-6 subcard3 text-align-left  ">
            <Slide direction="up" >
              <div className="myelementSec">
                <h1>We‘re here to Provide Rides</h1>

                <p className="semicard3">
                  RIDERE helps you book a ride in an instant. Our riders are every
                  where in your city to take you to your destination.
                </p>
                {/* <p>
                  <a href="qw" className="cardbttn">
                    Learn More
                  </a>
                </p> */}
              </div>
            </Slide>
          </div>

          <div className="col col-lg-5  col-md-3 col-sm-2 subcard31 ">
            <Zoom triggerOnce={true}>
              <div className="myelementSec">
                <video
                  className="semicard31"
                  src="./images/vid.mp4"
                  alt="dff"
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="100%"
                ></video>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Videocomponent;