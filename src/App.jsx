import { useState } from "react";
import Login from "./components/Login";
import AllPosts from "./components/AllPosts";
import PostById from "./components/PostById";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [view, setView] = useState("list");

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
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
