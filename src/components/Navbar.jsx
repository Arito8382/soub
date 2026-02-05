import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
        ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' 
        : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded-sm group-hover:rotate-180 transition duration-500">
            N
          </div>
          <span className="text-white">NEXUS<span className="text-gray-500">.CO</span></span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {['Home', 'Services', 'Works', 'About'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition duration-300">
                Let's Talk
            </Link>
        </div>

        {/* MOBILE BURGER */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">
            {['Home', 'Services', 'Works', 'About', 'Contact'].map((item) => (
            <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white"
            >
                {item}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

