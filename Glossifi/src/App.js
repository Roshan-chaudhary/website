import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; // Assuming Navbar is in a separate file
import Homee from './components/Homee';
import Contact from './components/Contact';
import Career from './components/Career';
import Serviceess from './components/Serviceess';
import About from './components/About';

const App = () => {
  return (
  <div className="">
    <Navbar/>
   <Routes>
			<Route path="/" exact element={<Homee />} />
      <Route path="/contact" exact element={<Contact/>} />
      <Route path="/carrer" exact element={<Career/>} />
      <Route path="/service" exact element={<Serviceess/>} />
      <Route path="/about" exact element={<About/>} />
		</Routes>


  </div>
    
    
  );
};

export default App;
