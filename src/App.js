import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Website from "./components/Site";

import Header from "./components/adds/Header";
import About from "./components/pages/About";



function App() {
    return (
        <div className="background">
            <section>
                <Header />
            </section>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Website />} />
                    <Route path='/About' element={<About />} />
                </Routes>
            </BrowserRouter>
          
        </div>
    )
}


export default App;
