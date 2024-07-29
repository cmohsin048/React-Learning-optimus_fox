import React, { useState, useEffect } from 'react';
import CountdownTimer from './component/CountdownTime';
import Nav from './component/Navbar';
import Team from './component/Teams';
import Form from './component/Signin_Form';
import Fav from './component/Displayfav';
import Loader from './component/Loader'; // Import the Loader component
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);       
         return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />; // Show loader while loading
    }

    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<CountdownTimer />} />
                    <Route path="/Meet" element={<Team />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/fav" element={<Fav />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
