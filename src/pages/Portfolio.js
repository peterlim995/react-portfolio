import React, {useState} from 'react';
import Project from '../components/Project'
import NavTabs from '../components/NavTabs';

export default function Portfolio() {

  const images = [
    {
      src: '/react-portfolio/images/k-meal-planner.jpg',
      alt: 'Group Project 3',
      title: 'Group Project 3: Recipefinder',
      description: 'MERN Stack Single-Page Application',
      deployed: 'https://k-meal-planner.herokuapp.com/',
      github: 'https://github.com/michelletrn/k-meal-planner'
    },
    {
      src: '/react-portfolio/images/book-search-engine.jpg',
      alt: 'Book Search Engine',
      title: 'Book Search Engine',
      description: 'MERN Challenge',
      deployed: 'https://book-search-engine-peterlim995.herokuapp.com/',
      github: 'https://github.com/peterlim995/Book-Search-Engine'
    },
    {
      src: '/react-portfolio/images/Social-Network-API.jpg',
      alt: 'Social Network API',
      title: 'Social Network API',
      description: 'NoSQL Challenge',
      deployed: 'https://user-images.githubusercontent.com/115592345/215306973-72b365c4-2d7f-4f89-9caf-a9f8963806ea.mp4',
      github: 'https://github.com/peterlim995/Social_Network_API'
    },
    {
      src: '/react-portfolio/images/community-chat.jpg',
      alt: 'Group Project 2',
      title: 'Group Project 2: Community Chat',
      description: 'Interactive Full-Stack Application',
      deployed: 'https://community-chat.herokuapp.com/',
      github: 'https://github.com/BillStephens2022/Community-Chat'
    },
    {
      src: '/react-portfolio/images/tech-blog.jpg',
      alt: 'Tech Blog',
      title: 'Tech Blog',
      description: 'Model-View-Controller (MVC) Challenge',
      deployed: 'https://tech-blog-peterlim995.herokuapp.com/',
      github: 'https://github.com/peterlim995/Tech_Blog'
    },
    {
      src: '/react-portfolio/images/E-Commerce-Backend.jpg',
      alt: 'E-Commerce Back End',
      title: 'E-Commerce Back End',
      description: 'Object-Relational Mapping (ORM) Challenge',
      deployed: 'https://user-images.githubusercontent.com/115592345/211721616-05e66df1-94bf-4ab4-9fb0-fc385aeae52a.mp4',
      github: 'https://github.com/peterlim995/E-Commerce-Back-End'
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
      src: '/react-portfolio/images/note-taker.jpg',
      alt: 'Note Taker',
      title: 'Note Taker',
      description: 'Express.js Challenge',
      deployed: 'https://note-taker-peterlim995.herokuapp.com/',
      github: 'https://github.com/peterlim995/Note_Taker'
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
      src: '/react-portfolio/images/Readme_Generator.jpg',
      alt: 'Professional README Generator',
      title: 'Professional README Generator',
      description: 'Node.js Challenge',
      deployed: 'https://user-images.githubusercontent.com/115592345/207998333-3681d070-f8bf-4fef-bee0-3042701747ed.mp4',
      github: 'https://github.com/peterlim995/README-Generator'
    },
    {
      src: '/react-portfolio/images/healthy-gigs.jpg',
      alt: 'Group Project 1',
      title: 'Group Project 1: Healthy Gigs',
      description: 'Interactive Front-End Application',
      deployed: 'https://sam-lerner.github.io/healthy-gigs/',
      github: 'https://github.com/sam-lerner/healthy-gigs'
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
      src: '/react-portfolio/images/Work-Day-Scheduler_.jpg',
      alt: 'Work Day Scheduler',
      title: 'Work Day Scheduler',
      description: 'Third-Party APIs',
      deployed: 'https://peterlim995.github.io/Work-Day-Scheduler/',
      github: 'https://github.com/peterlim995/Work-Day-Scheduler'
    },
    {
      src: '/react-portfolio/images/quiz.jpg',
      alt: 'Code Quiz',
      title: 'Code Quiz',
      description: 'Web-APIs Challenge',
      deployed: 'https://peterlim995.github.io/Code_Quiz/index.html',
      github: 'https://github.com/peterlim995/Code_Quiz'
    },
    {
      src: '/react-portfolio/images/GeneratePassword_.png',
      alt: 'Password Generator',
      title: 'Password Generator',
      description: 'JavaScript Challenge',
      deployed: 'https://peterlim995.github.io/GeneratePassword/',
      github: 'https://github.com/peterlim995/GeneratePassword'
    },
    
    
    
    
    

  ]

  // const [isBlurred, setIsBlurred] = useState(false);
  // const [blurValue, setBlurValue] = useState(0);
  // const imageWidth = 400;
  // const imageHeight = 300;
  
  // React.useEffect(() => {
  //   let blurInterval;
  //   if (isBlurred) {
  //     blurInterval = setInterval(() => {
  //       setBlurValue(blurValue => {
  //         if (blurValue >= 5) {
  //           clearInterval(blurInterval);
  //           return 5;
  //         } else {
  //           return blurValue + 0.5;
  //         }
  //       });
  //     }, 50);
  //   } else {
  //     blurInterval = setInterval(() => {
  //       setBlurValue(blurValue => {
  //         if (blurValue <= 0) {
  //           clearInterval(blurInterval);
  //           return 0;
  //         } else {
  //           return blurValue - 0.5;
  //         }
  //       });
  //     }, 50);
  //   }
  //   return () => {
  //     clearInterval(blurInterval);
  //   };
  // }, [isBlurred]);


  return (

    <>
    <NavTabs currentPage='Portfolio' />
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center">Portfolio</h2>
        <p className="text-center">My Recent Work</p>
        <div className="row">                    
            <Project images={images}/>          
        </div>
      </div>
    </section>
    </>
  );
}
