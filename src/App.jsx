import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./pages/Home/Home";
import EventsList from "./pages/Events/EventsList";
import CreateEvent from "./pages/Events/CreateEvent";
import EditEvent from "./pages/Events/EditEvent";
import GroupsList from "./pages/Groups/GroupsList";
import CreateGroup from "./pages/Groups/CreateGroup";
import EditGroup from "./pages/Groups/EditGroup";
import GroupCard from "./pages/Groups/GroupCard";
import About from "./pages/About/About";

function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("token");
  return !isLoggedIn ? children : <Navigate to="/" />;
}

export default function App() {
  const [authView, setAuthView] = useState("login");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login
                onLogin={() => window.location.href = "/"}
                onShowRegister={() => setAuthView("register")}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration
                onRegister={() => window.location.href = "/"}
                onShowLogin={() => setAuthView("login")}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <EventsList />
            </PrivateRoute>
          }
        />
        <Route
          path="/events/create"
          element={
            <PrivateRoute>
              <CreateEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/events/edit/:id"
          element={
            <PrivateRoute>
              <EditEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <PrivateRoute>
              <GroupsList />
            </PrivateRoute>
          }
        />
        <Route
          path="/groups/create"
          element={
            <PrivateRoute>
              <CreateGroup />
            </PrivateRoute>
          }
        />
        <Route
          path="/groups/edit/:id"
          element={
            <PrivateRoute>
              <EditGroup />
            </PrivateRoute>
          }
        />
        <Route
          path="/groups/:id"
          element={
            <PrivateRoute>
              <GroupCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
