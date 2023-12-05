import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Website from "./components/Site";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";



function App() {
    return (
        <div className="background">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Website />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;
