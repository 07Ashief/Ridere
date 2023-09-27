import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import myImage1 from "./images/pexels-cesar-perez-733745.jpg";
import myImage2 from "./images/pexels-yurii-hlei-1545743.jpg";
import "./RCarousal.css";
import { Slide } from "react-awesome-reveal";

function MyCarousel() {
  // Your existing carousel code here...

  const [captionStyles, setCaptionStyles] = useState({
    position: "absolute",
    top: "150px",
    left: "100px",
    width: "40%",
  });

  useEffect(() => {
    // Update styles based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCaptionStyles({
          position: "absolute",
          top: "150px",
          left: "0",
          width: "100%",
          padding: "0 20px",
          textAlign: "left",

        });
      } else {
        setCaptionStyles({
          position: "absolute",
          top: "150px",
          left: "100px",
          width: "40%",
        });
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set styles
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSlide = (slideIndex) => {
    // Calculate the offset based on the slide index (0-indexed)
    const offset = slideIndex * window.innerHeight;

    // Scroll to the calculated offset
    window.scrollTo({
      top: offset,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div>
      {/* Content to be displayed above the carousel */}
      <div className="above-carousel-content">
        <Slide direction="left" triggerOnce>
          {/* <div style={{
            opacity: 0.2,
            transition: 'opacity 0.5s ease-in-out , transform 0.5s ease-in-out',
            transform: 'translateX(-50px)',
            
          }}> */}
          <div className="myelementSec">
            <h1 className="rhead">RIDE<span style={{ color: "orange" }}>RE</span></h1>
            <h2 className="rtext">
              Way to Ride
            </h2>
            <p>
              <a
                className="btn btn-lg rounded-pill custom-button"
                href="https://play.google.com/store/"
              >
                <strong>
                  Download
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down arrowDownSvg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg> */}
                  <svg className="arrowDownSvg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" fill="white" />
                  </svg>
                </strong>{" "}

              </a>
            </p>
          </div>

        </Slide>
      </div>

      {/* The carousel */}
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        {/* Your carousel code here... */}

        <button
          type="button"
          className="scroll-down-button"
          onClick={() => scrollToSlide(1)} // Scroll to the second slide (index 1)
        >
          Scroll Down
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" fill="white" />
          </svg>

        </button>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src={myImage1}
              className="d-block w-100"
              alt="Slide 1"
              style={{
                height: "100vh",
                objectFit: "cover",
                position: "relative",
              }}
            />
            <div className="gradient-overlay"></div>

            {/* <div className="container">
            <div
              className="carousel-caption text-start"
              style={captionStyles}
            >
              <h1 className="rhead">RIDE<span style={{ color: "orange" }}>RE</span></h1>
              <h2 className="rtext">
                Way to Ride
              </h2>
              <p>
                <a
                  className="btn btn-lg rounded-pill  custom-button"
                  href="https://www.google.com/"
                >
                  <strong>Download</strong>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div> */}
          </div>
          <div className="carousel-item ">
            <img
              src={myImage2}
              className="d-block w-100"
              alt="Slide 1"
              style={{
                height: "100vh",
                objectFit: "cover",
                position: "relative",
              }}
            />
            <div className="gradient-overlay"></div>

            {/* <div className="container">
            <div
              className="carousel-caption text-start"
              style={captionStyles}
            >
              <h1 className="rhead">RIDE<span style={{ color: "orange" }}>RE</span></h1>
              <h2 className="rtext">
                Way to Ride
              </h2>
              <p>
                <a
                  className="btn btn-lg rounded-pill  custom-button"
                  href="https://www.google.com/"
                >
                  <strong>Download</strong>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div> */}
          </div>

          <div className="carousel-item active">
            <img
              src={myImage2}
              className="d-block w-100"
              alt="Slide 1"
              style={{
                height: "100vh",
                objectFit: "cover",
                position: "relative",
              }}
            />
            <div className="gradient-overlay"></div>

            {/* <div className="container">
            <div
              className="carousel-caption text-start"
              style={captionStyles}
            >
              <Slide direction="left" triggerOnce>

                <h1 className="rhead">RIDE<span style={{ color: "orange" }}>RE</span></h1>
                <h2 className="rtext">
                  Way to Ride
                </h2>
                <p>
                  <a
                    className="btn btn-lg rounded-pill  custom-button"
                    href="https://www.google.com/"
                  >
                    <strong>Download</strong>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                  </a>
                </p>
              </Slide>
            </div>
          </div> */}
          </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MyCarousel;
