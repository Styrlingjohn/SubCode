import React, { useState } from "react";
import NavTabs from "./adds/NavTabs";
import About from './pages/About';
import Footer from "./adds/Footer";
import Home from "./pages/Home";



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
  };


  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div className="page-container">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>

  );
};

export default Website;