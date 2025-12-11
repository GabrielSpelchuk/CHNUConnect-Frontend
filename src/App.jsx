import { useState } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AllPosts from "./components/Posts/AllPosts";
import PostById from "./components/Posts/PostById";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [view, setView] = useState("list");
  const [authView, setAuthView] = useState("login"); // 'login' or 'register'

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
      <h1>Posts App</h1>
      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>Logout</button>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("list")} style={{ marginRight: "10px" }}>
          Show All Posts
        </button>
        <button onClick={() => setView("single")}>
          Get Post By ID
        </button>
      </div>
      <div>
        {view === "list" && <AllPosts />}
        {view === "single" && <PostById />}
      </div>
    </div>
  );
}
