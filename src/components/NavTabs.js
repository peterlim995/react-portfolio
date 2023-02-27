import React from 'react';
import '../styles/NavTabs.css';
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage }) {
  return (

    <div className="d-flex justify-content-center">

    <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-center">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>        
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">           
              <Link className={currentPage === 'About Me' ? 'link active' : 'link'} to="/">About Me</Link>
          </li>
          <li className="nav-item">            
              <Link className={currentPage === 'Portfolio' ? 'link active' : 'link'} to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">            
              <Link className={currentPage === 'Contact' ? 'link active' : 'link'} to="/contact">Contact</Link>
          </li>
          <li className="nav-item">            
              <Link className={currentPage === 'Resume' ? 'link active' : 'link'} to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default NavTabs;
