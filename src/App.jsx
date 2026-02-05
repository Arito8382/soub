import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

// Components Placeholder (Untuk halaman yg belum dibuat)
const PagePlaceholder = ({ title }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center pt-20">
    <h1 className="text-5xl font-bold mb-4">{title}</h1>
    <p className="text-gray-500">Coming Soon. We are building something great.</p>
  </div>
);

// Helper Scroll To Top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<PagePlaceholder title="Our Services" />} />
          <Route path="/works" element={<PagePlaceholder title="Selected Works" />} />
          <Route path="/about" element={<PagePlaceholder title="About Us" />} />
          <Route path="/contact" element={<PagePlaceholder title="Contact" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

