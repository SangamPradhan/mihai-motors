import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PageBanner = ({ title, currentPath }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Allows internal components to fade up smoothly after route changes
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-[45vh] min-h-[350px] flex flex-col justify-center items-center overflow-hidden mb-20 fade-in ${loaded ? 'visible' : ''}`}>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Red Car Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-700 hover:backdrop-blur-none hover:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
      </div>
      <div className={`relative z-10 text-center px-8 sm:px-12 mt-20 fade-in delay-200 ${loaded ? 'visible' : ''}`}>
        <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] tracking-tight">{title}</h1>
        <nav className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] uppercase font-label">
          <Link className="text-neutral-400 hover:text-primary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-primary text-[14px]">chevron_right</span>
          <span className="text-white font-bold drop-shadow-md">{currentPath}</span>
        </nav>
      </div>
    </div>
  );
};

export default PageBanner;
