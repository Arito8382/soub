import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6">
            
            {/* BIG TEXT CTA */}
            <div className="mb-24 text-center md:text-left">
                <h2 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-8">
                    HAVE AN IDEA? <br/>
                    <span className="text-gray-600">TELL US.</span>
                </h2>
                <Link to="/contact" className="inline-block px-10 py-5 border border-white/30 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition duration-300">
                    Start a Project
                </Link>
            </div>

            {/* GRID LINKS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Sitemap</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/works" className="hover:text-white">Works</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Socials</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white">Dribbble</a></li>
                        <li><a href="#" className="hover:text-white">Behance</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Newsletter</h4>
                    <form className="flex border-b border-white/30 pb-2">
                        <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none text-white placeholder-gray-600" />
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-gray-400">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
                <p>&copy; 2026 NEXUS CORP. All Rights Reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

