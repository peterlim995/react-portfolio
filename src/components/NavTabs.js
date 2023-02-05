import React from 'react';
import '../styles/NavTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light d-flex  justify-content-center">

      {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <ul className="navbar-nav px-5">
          <li className="nav-item">
            <a
              className={currentPage === 'About Me' ? 'link active' : 'link'}
              onClick={() => handlePageChange('About Me')}
              href="#about-me">About Me</a>
          </li>
          <li className="nav-item">
            <a
              className={currentPage === 'Portfolio' ? 'link active' : 'link'}
              onClick={() => handlePageChange('Portfolio')}
              href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a
              className={currentPage === 'Contact' ? 'link active' : 'link'}
              onClick={() => handlePageChange('Contact')}
              href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a
              className={currentPage === 'Resume' ? 'link active' : 'link'}
              onClick={() => handlePageChange('Resume')}
              href="#resume">Resume</a>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}

export default NavTabs;