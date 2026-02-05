import { motion, useScroll, useTransform } from 'framer-motion';

// Komponen Helper FadeIn
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 border-b border-white/10">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter mb-8 text-white">
                    DIGITAL <br/>
                    <span className="text-gray-600">EXPERIENCE</span>
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                <div className="md:col-span-7">
                     {/* Video/Image Placeholder */}
                     <motion.div 
                        style={{ y: yParallax }}
                        className="h-[300px] md:h-[400px] bg-gray-900 overflow-hidden relative grayscale hover:grayscale-0 transition duration-700"
                    >
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                     </motion.div>
                </div>
                <div className="md:col-span-5 pb-12">
                    <FadeIn delay={0.5}>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-8">
                            We are a creative agency producing lasting results for the brands of tomorrow. Minimalist, Bold, & Functional.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-px bg-white"></span>
                            <span className="text-xs font-bold uppercase tracking-widest">Scroll Down</span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* 2. MARQUEE (Solid Monochrome) */}
      <div className="bg-white text-black py-6 overflow-hidden border-y border-white">
        <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="whitespace-nowrap flex gap-12 text-4xl font-bold uppercase tracking-tighter"
        >
            Strategy • Design • Development • Marketing • Strategy • Design • Development • Marketing • Strategy • Design • Development • Marketing •
        </motion.div>
      </div>

      {/* 3. ABOUT / METRICS */}
      <section className="py-32 border-b border-white/10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <FadeIn>
                    <h3 className="text-6xl font-bold mb-2">150+</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Projects Completed</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <h3 className="text-6xl font-bold mb-2">12</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <h3 className="text-6xl font-bold mb-2">24/7</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Support Team</p>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* 4. SERVICES (Grid Style) */}
      <section className="py-32">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Services</h2>
                <a href="#" className="hidden md:inline-block text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 transition">View All</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
                {[
                    { id: "01", title: "Brand Identity", desc: "Logo, Typography, & Visual Systems." },
                    { id: "02", title: "Web Development", desc: "React, Next.js, & High Performance Sites." },
                    { id: "03", title: "Product Design", desc: "UI/UX, Prototyping, & User Research." },
                    { id: "04", title: "SEO & Marketing", desc: "Analytics, Growth Strategy, & Ads." },
                    { id: "05", title: "Content Creation", desc: "Photography, Video, & Copywriting." },
                    { id: "06", title: "Consultancy", desc: "Tech Stack & Digital Transformation." },
                ].map((item, idx) => (
                    <div key={idx} className="group border-r border-b border-white/10 p-10 hover:bg-white hover:text-black transition duration-500 cursor-pointer relative overflow-hidden">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-50">{item.id}</span>
                            <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-sm opacity-60 group-hover:opacity-100 transition leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. SELECTED WORKS (Big Images) */}
      <section className="py-32 bg-[#0f0f0f] border-t border-white/10">
         <div className="container mx-auto px-6">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-16">Selected Works</h2>

            <div className="space-y-32">
                {/* Work 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden mb-8 relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10"></div>
                        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                             className="w-full h-[60vh] object-cover grayscale group-hover:grayscale-0 transition duration-1000 transform group-hover:scale-105" />
                    </div>
                    <div className="flex justify-between items-start border-t border-white/20 pt-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-2 group-hover:text-gray-400 transition">Urban Architecture</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Web Design / Photography</p>
                        </div>
                        <span className="text-xl group-hover:translate-x-4 transition duration-500">&rarr;</span>
                    </div>
                </div>

                {/* Work 2 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden mb-8 relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10"></div>
                        <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2000&auto=format&fit=crop" 
                             className="w-full h-[60vh] object-cover grayscale group-hover:grayscale-0 transition duration-1000 transform group-hover:scale-105" />
                    </div>
                    <div className="flex justify-between items-start border-t border-white/20 pt-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-2 group-hover:text-gray-400 transition">Neon Future</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Branding / 3D Art</p>
                        </div>
                        <span className="text-xl group-hover:translate-x-4 transition duration-500">&rarr;</span>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <button className="px-10 py-4 border border-white hover:bg-white hover:text-black transition duration-300 text-xs font-bold uppercase tracking-widest">
                    View All Projects
                </button>
            </div>
         </div>
      </section>

    </div>
  );
}

