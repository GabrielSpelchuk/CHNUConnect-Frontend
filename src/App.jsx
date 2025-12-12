import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel/AdminPanel";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogin = (userRole) => {
    setLoggedIn(true);
    setRole(userRole);
    localStorage.setItem("role", userRole);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoggedIn(false);
    setRole(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!loggedIn ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Registration onRegister={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            {/* HomePage з nested routes */}
            <Route path="/" element={<HomePage onLogout={handleLogout} />}>
              <Route index element={<HomePage.NewsFeed />} />
              <Route path="groups" element={<HomePage.GroupsList />} />
              <Route path="events" element={<HomePage.EventsList />} />
              <Route path="profile" element={<HomePage.Profile />} />
            </Route>

            {/* Admin доступ тільки якщо роль admin */}
            {role === "admin" && (
              <Route path="/admin" element={<AdminPanel onLogout={handleLogout} />} />
            )}

            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}