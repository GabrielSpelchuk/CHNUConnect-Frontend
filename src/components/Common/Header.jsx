import React from 'react';

const NAV_LINKS = ['Головна', 'Події', 'Групи', 'Про Нас'];

const Header = () => (
    <header className="header">
        <div className="header-left">
            <span className="logo">🎓 CHNU Connect</span>
        </div>
        <nav className="header-nav">
            {NAV_LINKS.map(link => (
                <a key={link} href={`#${link}`} className="nav-link">{link}</a>
            ))}
        </nav>
        <div className="header-right">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Пошук..." className="search-input" />
        </div>
    </header>
);

export default Header;
