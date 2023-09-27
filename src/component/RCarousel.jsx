import React, { useState, useEffect } from 'react';
import './MyNavbar.css';
import logoridere from './images/logoridere.png';

function MyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIncreasedWidth, setIsIncreasedWidth] = useState(false);
  const [isMarginTop, setIsMarginTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setIsMarginTop(true);
        setIsIncreasedWidth(true);
      } else {
        setIsScrolled(false);
        setIsMarginTop(false);
        setIsIncreasedWidth(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar navbar-expand-md navbar-light fixed-top bg-light${
    isScrolled ? ' custom-opacity-navbar rounded-navbar reduced-width' : ''
  }${isMarginTop ? ' margin-top-10' : ''}${isIncreasedWidth ? ' increased-width' : ''}`;

  return (
    <header data-bs-theme="light">
      <nav className={navbarClasses}>
        <div className="container">
        <a className="navbar-brand" href="#">
  <img src={logoridere} alt="Logo Ridere" style={{ width: '50px', height: '50px' }} />
</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0" style={{ margin: '0 auto' }}>
              <li className="nav-item">
                <a className="nav-link active mx-2 link-with-underline" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 link-with-underline" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 link-with-underline" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 link-with-underline" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 link-with-underline" aria-current="page" href="#">
                  FAQs
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-dark">
              Sign-up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyNavbar;

// .link-with-underline {
//   position: relative;
//   text-decoration: none;
//   transition: color 0.3s;

//   &::before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background-color: Black;
//     transition: width 0.3s ease-in-out;
//   }
  

//   &:hover::before {
//     width: 100%;
//   }
// }

// .custom-opacity-navbar {
//   opacity: 0.8;
// }

// .rounded-navbar {
//   border-radius: 10px;
// }

// /* Add 10px margin-top */
// .margin-top-10 {
//   margin-top: 10px;
// }

// /* Reduce the width by 10% */
// .reduced-width {
//   width: 90%;
//   margin: 0 5%;
// }
// .scrolled {
//   margin-top: 10px;
// }
// .scrolled .App-header {
//   margin-top: 10px;
// }


// .increased-width {
//   width: 100%; /* You can adjust the width as needed */
//   margin: 0; /* Remove the left and right margin */
// }

// /* Add 10px margin-top when the user scrolls */
// .margin-top-10 {
// margin-top: 10px;
// }
// /* CSS for left images with black overlay on the left half */
// .left-image-with-overlay {
// position: relative;
// }

// .left-image-with-overlay::before {
// content: '';
// position: absolute;
// top: 0;
// left: 0;
// width: 50%; /* Adjust the width as needed for the left overlay */
// height: 100%;
// background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
// z-index: 1; /* Ensure the overlay appears above the image */
// }


