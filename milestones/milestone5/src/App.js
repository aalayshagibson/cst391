import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import DevotionalList from './components/DevotionalList';
import DevotionalDetail from './components/DevotionalDetail';
import CreateDevotional from './components/CreateDevotional';
import EditDevotional from './components/EditDevotional';
import DeleteDevotional from './components/DeleteDevotional';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">FaithQuest</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/devotionals">Devotionals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Devotional</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devotionals" element={<DevotionalList />} />
          <Route path="/devotionals/:id" element={<DevotionalDetail />} />
          <Route path="/create" element={<CreateDevotional />} />
          <Route path="/edit/:id" element={<EditDevotional />} />
          <Route path="/delete/:id" element={<DeleteDevotional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;