import React from 'react';
import '../../styles/AboutMe.css';


export default function AboutMe() {
  return (
    
    <section id="about-me" className="py-5 ">

      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <img id="my-photo" src="/react-portfolio/images/my-family.JPG" alt="Peter Lim" className="img-fluid mb-5 rounded-circle"/>
            <h2 className="text-secondary">Peter Lim</h2>
            <p className="lead text-muted mb-5">Problem-solver | Proactive | Passionate</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            {/* <details className="mb-4"> */}
            <p>Hi, I'm Peter Lim. I am a highly skilled software developer with a passion for solving complex technical problems and delivering innovative software solutions. My background in computer science, combined with my experience as a teacher and youth group leader, has given me a unique perspective on the importance of clear communication and teamwork in software development.</p>

            <p> I was born in South Korea and came to America in 2008. I am married with five beautiful daughters and enjoy playing sports such as pingpong, soccer, basketball, and baseball in my free time. I am also a tenor and have a passion for singing.</p>

            <p>I hold a Bachelor of Computer Science & Information and a Master of Arts in Biblical Counseling. I have also completed a JAVA Programming Certificate of Achievement and a Full Stack Web Developer Bootcamp at Rutgers University. Throughout my career, I have held various roles including middle school teacher, signal officer in the South Korean army, logistic and technical support, Korean school teacher, and daycare manager.</p>

            <p>My experience as a teacher and youth group leader has honed my communication skills and my ability to lead teams towards a common goal. As a software developer, I am always eager to learn and take on new challenges, and I am confident in my ability to deliver high-quality software solutions that meet the needs of my clients.</p>

            <p>Thank you for visiting my portfolio website. I look forward to the opportunity to work with you and bring my passion for software development to your team.</p>
              {/* <summary className="text-secondary font-weight-bold">Personal Information</summary>
              <p className="text-muted mb-3">Born: 2/24/1981, South Korea. Coming to America (2008), Married (2010), Have beautiful 5 daughters. Tenor. Sports (pingpong, soccer, basketball, baseball).</p>
            </details>
            <details className="mb-4">
              <summary className="text-secondary font-weight-bold">Education</summary>
              <p className="text-muted mb-3">Bachelor of Computer Science & Information. Master of Arts in Biblical Counseling. JAVA Programming Certificate of Achievement. Rutgers Coding Bootcamp.</p>
            </details>
            <details className="mb-4">
              <summary className="text-secondary font-weight-bold">Profession Experiences</summary>
              <p className="text-muted mb-3">Middle School Teacher (Computer Subject). Siganl Officer (South Korea Army). Logistic & Technical Support (Iocell Network). Korean School Teacher. Daycare Manager.</p>
            </details>
            <details>
              <summary className="text-secondary font-weight-bold">Skills</summary>
              <p className="text-muted mb-3">Java, PHP, C/C++, HTML, CSS, JavaScript, MySQL. Highly organized and efficient. Fluent in Korean.</p>
            </details> */}
          </div>
        </div>
      </div>

    </section>
  );
}
