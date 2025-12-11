import React from 'react';
import Header from './Common/Header.jsx';
import HeroBanner from './Common/HeroBanner.jsx';
import NewsFeed from './NewsFeed/NewsFeed.jsx';
import Sidebar from './SideBar/SideBarHomePage.jsx';
import Footer from './Common/Footer.jsx';
import './HomePage.css';

function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <HeroBanner />
      <div className="main-content-area">
        <NewsFeed />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
