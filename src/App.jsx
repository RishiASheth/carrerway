import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DomainPage from './DomainPage';
import Engineering from './Carrers/Engineering';
import Doctor from './Carrers/Doctor';
import Commerce from './Carrers/Commerce';
import QuestionnairePage from './QuestionnairePage';  
import SwipePage from './SwipePage';
import FavoritesPage from './FavoritesPage';
import JobDetailsPage from './JobDetailsPage';
import VoiceBot from './VoiceBot'; // Import the new Voice Bot page
import Movies from './Movies';
import Login from './Login';
import Signup from './signup';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/domain" element={<DomainPage />} />
        <Route path="/SwipePage" element={<SwipePage />} />
        <Route path="/domain/doctor" element={<Doctor />} />
        <Route path="/domain/commerce" element={<Commerce />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />  
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/job/:id" element={<JobDetailsPage />} /> {/* Single route to handle job details */}
        <Route path="/voice-bot" element={<VoiceBot />} />
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
