import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NotificationProvider } from './context/NotificationContext';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CarsPage from './components/CarsPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import CarDetailPage from './components/CarDetailPage';
import EcoDrivePage from './components/EcoDrivePage';
import ComplaintsPage from './components/ComplaintsPage';

export interface User {
  name: string;
  email: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('gogari_user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    localStorage.setItem('gogari_user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('gogari_user');
    setUser(null);
  };

  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              user ? <HomePage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/cars" 
            element={
              user ? <CarsPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/cars/:id" 
            element={
              user ? <CarDetailPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/about" 
            element={
              user ? <AboutPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/blog" 
            element={
              user ? <BlogPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/contact" 
            element={
              user ? <ContactPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/faq" 
            element={
              user ? <FAQPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/privacy" 
            element={
              user ? <PrivacyPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/terms" 
            element={
              user ? <TermsPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/project-details" 
            element={
              user ? <ProjectDetailsPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/eco-drive" 
            element={
              user ? <EcoDrivePage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/complaints" 
            element={
              user ? <ComplaintsPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
            } 
          />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}
