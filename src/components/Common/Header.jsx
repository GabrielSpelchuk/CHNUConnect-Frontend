import React from 'react';
import { Link } from "react-router-dom";
import { CHNUConnectIcon, UserIcon, SearchIcon } from '../Icons';

const NAV_LINKS = ['Головна', 'Події', 'Групи', 'Про Нас'];

const Header = () => (
    <header className="header">
        <div className="header-left">
            <img src={CHNUConnectIcon} alt="CHNU Connect" className="logo-icon" />
            <span className="logo">CHNU Connect</span>
        </div>

        <div className="header-right">
            <nav className="header-nav">
                <Link to="/" className="nav-link">Головна</Link>
                <Link to="/events" className="nav-link">Події</Link>
                <Link to="/groups" className="nav-link">Групи</Link>
                <Link to="/about" className="nav-link">Про Нас</Link>
            </nav>

            <Link to="/profile">
                <img src={UserIcon} alt="User" className="user-icon" />
            </Link>

            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Пошук..." className="search-input" />
        </div>
    </header>
);

export default Header;
