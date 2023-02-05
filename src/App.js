import React from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import './styles/reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => (
  <>
  <div className="top"></div>    
    <div className='main '>
    <Header />
    <Navigation />        
    <Footer />
    </div>    
  <div className="bottom"></div>
  </>
);

export default App;





