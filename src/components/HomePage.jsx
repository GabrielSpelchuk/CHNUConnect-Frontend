import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './Common/Header.jsx';
import GroupsList from './Groups/GroupsList.jsx';
import EventsList from './Events/EventsList.jsx';
import HeroBanner from './Common/HeroBanner.jsx';
import NewsFeed from './NewsFeed/NewsFeed.jsx';
import Sidebar from './SideBar/SideBarHomePage.jsx';
import Footer from './Common/Footer.jsx';
import Profile from './Profile/Profile.jsx';
import './HomePage.css';

function HomePage() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-container">
      <Header />

      {/* HeroBanner тільки на головній */}
      {isHome && <HeroBanner />}

      <div className={`main-content-area ${isHome ? "with-sidebar" : "full-width"}`}>
        {isHome && <NewsFeed />}
        {isHome && <Sidebar />}
        
        {!isHome && (
          <Routes>
            <Route path="/groups" element={<GroupsList />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
