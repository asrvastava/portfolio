import React from 'react';
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About';
import Exprience from './component/exprience/exprience';
import Portfolio from './component/portfolio/portfolio';
import Education from "./component/education/Eduaction";
import Contact from './component/contact/Contact';
import Footer from './component/footer/footer';

const App = () => {
  return (
    <>
    <Header /> 
    <Nav />
    <About />
    <Exprience />
    <Portfolio />
    <Education/>
    <Contact />
    <Footer />
  
   </>
  );
}

export default App