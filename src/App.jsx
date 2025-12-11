import { useState } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import HomePage from "./components/HomePage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [view, setView] = useState("list");
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
    <div style={{ padding: "20px", fontFamily: "Inter, sans-serif" }}>
      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>Logout</button>
      <HomePage />
    </div>
  );
}
