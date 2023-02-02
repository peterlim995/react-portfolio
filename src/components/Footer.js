import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="bg-light py-3">
    <p className="text-center">Copyright © {new Date().getFullYear()} My Portfolio</p>
  </footer>
);

export default Footer;
