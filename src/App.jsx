import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import HomePage from "./components/HomePage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [authView, setAuthView] = useState("login"); 

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return authView === "login" ? (
      <Login onLogin={handleLogin} onShowRegister={() => setAuthView("register")} />
    ) : (
      <Registration onRegister={handleLogin} onShowLogin={() => setAuthView("login")} />
    );
  }

  return (
    <BrowserRouter>
      <HomePage onLogout={handleLogout} />
    </BrowserRouter>
  );
}
