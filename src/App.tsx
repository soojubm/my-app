import { useContext, useState, useEffect, useMemo } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import UserStore, { UserContext } from "./contexts/UserContext";

import "./App.scss";

function App() {
  return (
    <UserStore>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </UserStore>
  );
}

function Layout() {
  return (
    <div style={{ margin: "5vw" }}>
      <h1>Welcome to the app!</h1>
      <Username />
      <nav>
        <Link to="invoices">Invoices</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Username() {
  const { username, setUsername } = useContext(UserContext);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  return (
    <div>
      <input type="text" value={username} onChange={handleUsername} />
    </div>
  );
}

function Invoices() {
  const { username } = useContext(UserContext);

  return <h1>Hello, {username}</h1>;
}

export default App;
