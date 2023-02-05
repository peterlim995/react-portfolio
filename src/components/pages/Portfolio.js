import React, {useState} from 'react';
import Project from '../Project';
import quizjpg from '../../images/quiz.jpg';


export default function Portfolio() {

  const images = [
    {
      src: '/react-portfolio/images/quiz.jpg',
      alt: 'Code Quiz',
      title: 'Code Quiz',
      description: 'Web-APIs Challenge',
      deployed: 'https://peterlim995.github.io/Code_Quiz/index.html',
      github: 'https://github.com/peterlim995/Code_Quiz'
    },
    {
      src: '/react-portfolio/images/Weather_Dashboard.jpg',
      alt: 'Weather Dashboard',
      title: 'Weather Dashboard',
      description: 'Server-Side APIs Challenge',
      deployed: 'https://peterlim995.github.io/Weather_Dashboard/',
      github: 'https://github.com/peterlim995/Weather_Dashboard'
    },
    {
      src: '/react-portfolio/images/note-taker.jpg',
      alt: 'Note Taker',
      title: 'Note Taker',
      description: 'Express.js Challenge',
      deployed: 'https://note-taker-peterlim995.herokuapp.com/',
      github: 'github.com/peterlim995/Note_Taker'
    },
    {
      src: '/react-portfolio/images/employee-tracker.jpg',
      alt: 'Employee Tracker',
      title: 'Employee Tracker',
      description: 'SQL Challenge',
      deployed: 'https://user-images.githubusercontent.com/115592345/211251706-d1a307ad-3d83-4866-b55e-50ce3089c9a2.mp4',
      github: 'https://github.com/peterlim995/Employee_Tracker'
    },
    {
      src: '/react-portfolio/images/Team-profile-generator.jpg',
      alt: 'Team Profile Generator',
      title: 'Team Profile Generator',
      description: 'Object-Oriented Programming Challenge',
      deployed: 'https://user-images.githubusercontent.com/115592345/209069931-9127f894-6a60-4d7e-90d0-f594c68c3e36.mp4',
      github: 'https://github.com/peterlim995/Team_Profile_Generator'
    },
    {
      src: '/react-portfolio/images/healthy-gigs.jpg',
      alt: 'Group Project 1',
      title: 'Group Project 1: Healthy Gigs',
      description: 'Interactive Front-End Application',
      deployed: 'https://sam-lerner.github.io/healthy-gigs/',
      github: 'https://github.com/sam-lerner/healthy-gigs'
    }

  ]

  const [isBlurred, setIsBlurred] = useState(false);
  const [blurValue, setBlurValue] = useState(0);
  const imageWidth = 400;
  const imageHeight = 300;
  
  React.useEffect(() => {
    let blurInterval;
    if (isBlurred) {
      blurInterval = setInterval(() => {
        setBlurValue(blurValue => {
          if (blurValue >= 5) {
            clearInterval(blurInterval);
            return 5;
          } else {
            return blurValue + 0.5;
          }
        });
      }, 50);
    } else {
      blurInterval = setInterval(() => {
        setBlurValue(blurValue => {
          if (blurValue <= 0) {
            clearInterval(blurInterval);
            return 0;
          } else {
            return blurValue - 0.5;
          }
        });
      }, 50);
    }
    return () => {
      clearInterval(blurInterval);
    };
  }, [isBlurred]);


  return (

    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center">Portfolio</h2>
        <p className="text-center">My Recent Work</p>
        <div className="row">                    
            <Project images={images}/>          
        </div>
      </div>
    </section>
  );
}
