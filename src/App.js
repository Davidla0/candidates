import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContainer from './pages/AuthContainer';
import CandidateList from './pages/CandidateList.jsx';
import Candidate from './pages/candidate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/candidate/:id" element={<Candidate />} />
      </Routes>
    </Router>
  );
}

export default App;
