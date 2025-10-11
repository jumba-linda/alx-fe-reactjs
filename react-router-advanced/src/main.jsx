// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
import Login from './components/Login';

const isAuthenticated = true; // Simulate login status

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
