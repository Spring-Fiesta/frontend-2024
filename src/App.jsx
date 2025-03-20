import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import CoreTeam from './screens/CoreTeam';
import EventPage from './screens/EventPage';
import CoreTeamDept from './screens/CoreTeamDept';
import VotingPage from './screens/VotingPage';
import Login from './screens/login';
import ErrorPage from './components/ErrorPage';
import Gallery from './screens/Gallery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/events" element={<EventPage/>}></Route>
          <Route path="/core-team" element={<CoreTeam/>}></Route>
          <Route path="/core-team/:dept" element={<CoreTeamDept/>}></Route>
          <Route path="/voting" element={<VotingPage/>}></Route>
          <Route path='/register' element={<Login />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<ErrorPage />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
