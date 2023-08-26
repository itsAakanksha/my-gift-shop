import React from "react";
// import { Routes, Route } from "react-router-dom"; 
import Home from './components/homepage/Home'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Gift from "./components/homepage/gift";
import GiftIdeasForm from "./components/homepage/form";
import Nav from './components/homepage/Nav'
import Footer from "./components/homepage/Footer";
function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Routes> 
    
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/gift' element={<Gift />} ></Route>
            <Route exact path='/form' element={<GiftIdeasForm />} ></Route>

    </Routes>
    <Footer/>
    </div>
</Router>
  );
}

export default App;
