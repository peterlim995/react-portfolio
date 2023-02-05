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
            <details className="mb-4">
              <summary className="text-secondary font-weight-bold">Personal Information</summary>
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
            </details>
          </div>
        </div>
      </div>

    </section>
  );
}
