import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="#">My Portfolio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a 
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('About Me')}
          href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a 
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('Portfolio')}          
          href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a 
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('Contact')}                    
          href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a 
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('Resume')} 
          href="#resume">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavTabs;
