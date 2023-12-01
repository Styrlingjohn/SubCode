import React, { useState } from "react";
import NavTabs from "./adds/NavTabs";
import About from './pages/About';
import Home from "./pages/Home";
import Header from "./adds/Header";
import Footer from "./adds/Footer";


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
      <section>
        <Header />
      </section>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      {renderPage()}


      <div className="F-H-1">
        <Footer />
      </div>
    </div>

  );
};

export default Website;