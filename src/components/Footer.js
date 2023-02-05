import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => (
  <footer className="py-3">
    <ul className="contact">          
          <li ><a href="#"><FaLinkedin style={{ fontSize: '50px' }}/></a></li>
          <li ><a href="https://github.com/peterlim995/" target="_blank"><FaGithub style={{ fontSize: '50px' }}/></a></li>                
        </ul>
    <p className="text-center">Copyright © {new Date().getFullYear()} Peter Lim Portfolio</p>
  </footer>
);

export default Footer;
