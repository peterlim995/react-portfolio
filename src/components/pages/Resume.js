import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="py-5">
      <div className="container ">
        <ol>
          <li>
            <strong>Front-end Development:</strong>
            <ul>
              <li>HTML: Experience creating web pages using HyperText Markup Language.</li>
              <li>CSS: Knowledge of styling web pages using Cascading Style Sheets.</li>
              <li>JavaScript: Proficiency in the scripting language used for creating dynamic and interactive web pages.</li>
              <li>React: Experience with the popular JavaScript library for building user interfaces.</li>
            </ul>
          </li>
          <li>
            <strong>Back-end Development:</strong>
            <ul>
              <li>Node.js: Proficiency in using the JavaScript runtime environment for server-side programming.</li>
              <li>Express: Experience with the popular Node.js framework for building web applications.</li>
              <li>SQL: Knowledge of Structured Query Language for relational database management.</li>
              <li>NoSQL: Familiarity with non-relational databases.</li>
              <li>ORM: Knowledge of Object-Relational Mapping for interacting with databases.</li>
            </ul>
          </li>
          <li>
            <strong>Server-side Programming:</strong>
            <ul>
              <li>PHP: Proficiency in the server-side scripting language.</li>
              <li>Java: Experience with the object-oriented programming language used for building large-scale applications.</li>
            </ul>
          </li>
          <li>
            <strong>Database Management:</strong>
            <ul>
              <li>SQL: Knowledge of Structured Query Language for relational database management.</li>
              <li>NoSQL: Familiarity with non-relational databases.</li>
            </ul>
          </li>
          <li>
            <strong>Design Patterns:</strong>
            <ul>
              <li>MVC: Knowledge of the Model-View-Controller design pattern for separating an application into distinct components.</li>
            </ul>
          </li>
          <li>
            <strong>Full-Stack Development:</strong>
            <ul>
              <li>MERN: Experience with the popular stack for building full-stack web applications, consisting of MongoDB, Express, React, and Node.js.</li>
            </ul>
          </li>
          <li>
            <strong>State Management:</strong>
            <ul>
              <li>React state: Knowledge of managing the state of a React application.</li>
            </ul>
          </li>
          <li>
            <strong>Version Control:</strong>
            <ul>
              <li>Git: Experience with the widely-used version control system for tracking changes in source code.</li>
            </ul>
          </li>
          <li>
            <strong>Deployment:</strong>
            <ul>
              <li>Heroku: Knowledge of deploying applications to the cloud platform.</li>
            </ul>
          </li>
          <li>
            <strong>RESTful API Development:</strong>
            <ul>
              <li>Experience in creating and using RESTful APIs to communicate between the front-end and back-end of a web application.</li>
            </ul>

          </li>
          <li>
            <strong>C/C++:</strong>
            <ul>
              <li>Proficiency in the multi-purpose programming language used for system and application programming.</li>
            </ul>
          </li>
         </ol>
        <p className="text-center">Download my resume:</p>
        <div className='d-flex justify-content-center'>
          <a href="https://peterlim995.github.io/react-portfolio/files/Resume%202023(Peter%20Lim).docx" className="btn btn-primary ">Download</a>
        </div>
      </div>
    </section>
  );
}
