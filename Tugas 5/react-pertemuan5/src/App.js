import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Params adalah placeholder di URL yang dimulai dengan titik dua,
// seperti param `: id` yang didefinisikan dalam route dalam contoh ini.

export default function BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            <Route path="/dashboard">
              <Dashboard />
            </Route>  
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  // Anda dapat menganggap komponen ini sebagai "halaman (konten)" di situs Anda.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    )
  }