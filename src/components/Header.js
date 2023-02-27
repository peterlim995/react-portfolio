import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header = () => (  
  <div className="header">
    {/* <a href="/" className="a">PETER LIM - WEB DEVELOPER PORTIFOLIO</a> */}
    <Link to="/" className="a">PETER LIM - WEB DEVELOPER PORTIFOLIO</Link>
  </div>  
);


export default Header;
