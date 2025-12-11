import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <div className="logo-icon">↑</div>
          <span className="logo-text">CHNU Connect</span>
        </Link>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">Головна</Link>
          <Link to="/events" className="nav-link">Події</Link>
          <Link to="/groups" className="nav-link">Групи</Link>
          <Link to="/about" className="nav-link">Про Нас</Link>
        </nav>
        
        <div className="header-right">
          <div className="user-icon">👤</div>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Пошук..." className="search-input" />
          </div>
        </div>
      </div>
    </header>
  );
}

