import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ThemeSwitcher from './components/ThemeSwitcher';

import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Brands from './pages/Brands';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CheckWarranty from './pages/CheckWarranty';

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-primary)' }}>
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/check-warranty" element={<CheckWarranty />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Sticky Utilities */}
        <FloatingWhatsApp />
        <ScrollToTop />
        <ThemeSwitcher />
      </div>
    </Router>
  );
}
