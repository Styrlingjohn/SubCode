import React, { useState } from "react";
import NavTabs from "./adds/NavTabs";
import About from './pages/About';
import Home from "./pages/Home";

import Footer from "./adds/Footer";
import Contact from "./pages/Contact";


function Website() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
    return <About />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
  };


  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      {renderPage()}


     
        <Footer />
        
    </div>

  );
};

export default Website;