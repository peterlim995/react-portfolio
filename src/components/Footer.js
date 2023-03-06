import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


const Footer = () => (
  <footer className="py-3">
    <ul className="contact">          
          <li ><a href="https://www.linkedin.com/in/peter-lim-675a2a22/" target="_blank"><FaLinkedin style={{ fontSize: '50px' }}/></a></li>
          <li ><a href="https://github.com/peterlim995/" target="_blank"><FaGithub style={{ fontSize: '50px' }}/></a></li>                
          <li ><a href="mailto:peterlim995@gmail.com" target="_blank"><AiOutlineMail style={{ fontSize: '50px' }}/></a></li>                
        </ul>
    <p className="text-center">Copyright © {new Date().getFullYear()} Peter Lim Portfolio</p>
  </footer>
);

export default Footer;
