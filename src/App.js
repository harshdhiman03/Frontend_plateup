import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <PillarsSection />
        </div>
    );
}

export default App;
