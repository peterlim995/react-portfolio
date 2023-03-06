import React from 'react';
import Header from "./components/Header";
// import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import './styles/reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import NavTabs from './components/NavTabs';



const App = () => (
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="top"></div>
      <div className='main '>
        <Header />        
        <Routes>
          {/* <Navigation /> */}
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
      <div className="bottom"></div>
    </Router>
  </>
);


export default App;





