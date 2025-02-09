import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Quote from './exercisetwo/Quote'
import Color from "./exerciseone/Color";
import Ps from './exercisefour/Ps'
import Tictactoe from './exercisefive/Tictactoe'
import Navbar from './exercisethree/Navbar'
import Home from './exercisethree/Home';
import { About } from './exercisethree/About'
import Contact from './exercisethree/Contact';


function App() {
  return (
    <>
    <Router>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Color/>} />
        <Route path="/quote" element={<Quote/>} />
        <Route path="/ps" element={<Ps/>} /> 
        <Route path="/tic-tac-toe" element={<Tictactoe/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
