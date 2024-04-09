import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

import Navbar from './components/Navbar'
import Create from './components/Create'
import Home from './components/Home'
import Gallery from './components/Gallery'
import CrewmateDetail from './components/CrewmateDetail';
import Delete from './components/Delete';
import Update from './components/Update';
import './App.css'

function App() {
  const [crewmates, setCrewmates] = useState([
    {id: 1, name: "Link", speed: 96, position: "Support"}, 
    {id: 2, name: "cjz", speed: 0, position: "Tank"}, 
  ]);

  // CRUD Operations
  const createCrewmate = (name, speed, position) => {
    const newCrewmate = {
      id: Math.max(0, ...crewmates.map(c => c.id)) + 1,
      name,
      speed,
      position,
    };
    setCrewmates([...crewmates, newCrewmate]);
  };

  const readCrewmates = () => {
    console.log(crewmates);
  };

  const updateCrewmate = (id, newName, newSpeed, newPosition) => {
    setCrewmates(
      crewmates.map((crewmate) => {
        if (crewmate.id === id) {
          return { ...crewmate, name: newName, speed: newSpeed, position: newPosition }
        } else {
          return crewmate
        }}));
  };

  const deleteCrewmate = (id) => {
    setCrewmates(crewmates.filter(crewmate => crewmate.id !== id));
  };

  useEffect(() => {readCrewmates();}, []);

  return (
    <>
    <BrowserRouter>
    <div className='container'>
      <div className='sidebar'>
        <Navbar />
      </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create createCrewmate={createCrewmate}/>} />
            <Route path="/gallery" element={<Gallery crewmates={crewmates}/>} />
            <Route path="/crewmate/:id" element={<CrewmateDetail updateCrewmate={updateCrewmate} deleteCrewmate={deleteCrewmate} crewmates={crewmates}/>} />
            <Route path="/update/:id" element={<Update crewmates={crewmates}/>} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
    </div>
    </ BrowserRouter>
    </>
  )
}

export default App
