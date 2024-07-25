import React from 'react';
import CountdownTimer from './component/CountdownTime';
import Nav from './component/Navbar';
import Team from './component/Teams';
import Form from './component/Signin_Form';
import Fav from './component/Displayfav';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<CountdownTimer />} />
          <Route path="/Meet" element={<Team />} />
          <Route path="/Form" element={<Form />} />
          <Route path='/fav'  element={<Fav/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
