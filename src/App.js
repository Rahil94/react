import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About';
import WorkSamples from './components/WorkSamples';
import Contact from './components/Contact';
import './App.css';

const Navigation = () => (
    <nav>
        <ul>
            <li><Link to="/">О себе</Link></li>
            <li><Link to="/work-samples">Примеры работ</Link></li>
            <li><Link to="/contact">Контактная информация</Link></li>
        </ul>
    </nav>
);

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/work-samples" element={<WorkSamples />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
