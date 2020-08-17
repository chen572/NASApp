import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/home' render={() => <Home />} />
    </Router>
  );
}

export default App;
