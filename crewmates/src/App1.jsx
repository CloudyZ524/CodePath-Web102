import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

import Navbar from './components/Navbar'
import Create from './components/Create'
import Home from './components/Home'
import Gallery from './components/Gallery'
import CrewmateDetail from './components/CrewmateDetail';
import './App.css'

// supabase client
const supabaseUrl = 'https://pvjmbbvpgjxyjustifpg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2am1iYnZwZ2p4eWp1c3RpZnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MzM3NDQsImV4cCI6MjAyODEwOTc0NH0.Y7LsWtveDNzODFNrTTv0OgsP1Z84-fB1TNp-q17sLOg'
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  const [crewmates, setCrewmates] = useState([{}]);

  // CRUD Operations
  const createCrewmate = async (name, speed, position) => {
    const { data, error } = await supabase.from('Crewmates').insert([{ name, speed, position }]);
    if (error) {
      console.error('Create crewmate error:', error);
    } else {
      readCrewmates();
    }
  };

  const readCrewmates = async () => {
    const { data, error } = await supabase.from('Crewmates').select();
    if (error) {
      console.error('Read crewmates error:', error);
    } else {
      setCrewmates(data);
    }
  };

  const updateCrewmate = async (id, newName, newSpeed, newPosition) => {
    console.log(id, newName, newSpeed, newPosition);
    const { data, error } = await supabase.from('Crewmates')
      .update({ name: newName, speed: newSpeed, position: newPosition })
      .eq('id', id);
    if (error) {
      console.error('Update crewmate error:', error);
    } else {
      console.log(data);
      setCrewmates([...crewmates.map(crewmate => crewmate.id === id ? { ...crewmate, ...data[0] } : crewmate)]);
    }
  };

  const deleteCrewmate = async (id) => {
    const { data, error } = await supabase.from('Crewmates')
      .delete().eq('id', id);
    if (error) {
      console.error('Delete crewmate error:', error);
    } else {
      setCrewmates(crewmates.filter(crewmate => crewmate.id !== id));
    }
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
          </Routes>
        </div>
    </div>
    </ BrowserRouter>
    </>
  )
}

export default App
