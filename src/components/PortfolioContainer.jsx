import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    console.log(currentPage)
    if (currentPage === 'Home') {
      return <Home />;
    }

    if (currentPage === 'Services') {
      return <Services />;
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }

    if (currentPage === 'Reviews') {
      return <Reviews />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
