import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Public Pages
import Home from './pages/Home';
import Program from './pages/Program';
import Gallery from './pages/Gallery';
import Artists from './pages/Artists';
import Location from './pages/Location';
import Vote from './pages/Vote';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminArtists from './pages/Admin/AdminArtists';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/artists" element={<AdminArtists />} />
            
            {/* Public Routes */}
            <Route path="/*" element={
              <>
                <Header />
                <main className="min-h-screen">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/vote" element={<Vote />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;