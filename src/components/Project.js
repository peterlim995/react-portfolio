import React from 'react';
import '../styles/Project.css';
import { FaGithub } from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md';


export default function Project({ projects}) {
    return (
        <>
            {projects &&
                projects.map(({ src, alt, title, description, deployed, github, skills, mainRole }) => (
                    <div className="col-12 col-sm-6 col-lg-4" key={alt}>
                        {/* <ProjectImage src={src} alt={alt} deployed={deployed} github={github} /> */}
                        <div className="image-container">
                            <img src={src} className="card-img-top" alt={alt} />
                            <a href={deployed} target="_blank" className="app"><MdExitToApp style={{ fontSize: '50px' }}/></a>
                            <a href={github} target="_blank" className="github"><FaGithub style={{ fontSize: '50px' }}/></a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title pt-3">{title}</h4>
                            <p className="card-text pt-3"><b>Description: </b>{description}</p>
                            <p className={`card-text ${!mainRole ? 'pb-3' : ''}`}><b>Skills: </b> {skills}</p>
                            {mainRole && <p className="card-text pb-3"><b>Main Role: </b> {mainRole}</p>}
                        </div>
                    </div>
                ))}
        </>
    );
}
