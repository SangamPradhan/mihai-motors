import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setSidebarOpen(false);
    }, [location]);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Inventory', path: '/inventory' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav id="main-header" className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 ease-in-out ${isSidebarOpen ? 'z-[10000]' : 'z-[50]'} ${scrolled && !isSidebarOpen ? 'translate-y-[-40px]' : ''}`}>
            {/* Top Contact Bar */}
            <div className="bg-surface-container-highest/80 backdrop-blur-md px-4 lg:px-12 py-2 border-white/5 border-b">
                <div className="flex justify-between items-center mx-auto max-w-screen-2xl w-full">
                    <div className="flex items-center space-x-6">
                        <a className="flex items-center gap-2 font-bold text-[10px] text-white/60 hover:text-primary uppercase tracking-widest transition-colors"
                            href="mailto:contact@mihaimotors.com">
                            <span className="text-sm material-symbols-outlined">mail</span>
                            <span className="hidden md:inline">contact@mihaimotors.com</span>
                        </a>
                        <a className="flex items-center gap-2 font-bold text-[10px] text-white/60 hover:text-primary uppercase tracking-widest transition-colors"
                            href="tel:+1234567890">
                            <span className="text-sm material-symbols-outlined">phone</span>
                            <span className="hidden md:inline">+1 (234) 567-890</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 text-white/40">
                        <Link to="/contact" className="flex items-center">
                            <span className="hover:text-primary text-sm transition-colors cursor-pointer material-symbols-outlined">location_on</span>
                        </Link>
                        <button onClick={toggleTheme}
                            className="flex justify-center items-center focus:outline-none hover:text-primary transition-colors"
                            title="Toggle Theme">
                            <span className="hidden dark:block text-sm material-symbols-outlined">light_mode</span>
                            <span className="dark:hidden block text-sm material-symbols-outlined">dark_mode</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className={`transition-all duration-300 ${scrolled ? 'bg-surface/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)]' : 'bg-surface/40'} backdrop-blur-lg border-white/5 border-b`}>
                <div className="flex justify-between items-center mx-auto px-4 lg:px-8 xl:px-12 py-5 max-w-screen-2xl">
                    <Link to="/" className="group flex items-center gap-3 lg:gap-4 transition-all">
                        {/* Stylized Logo Placeholder */}
                        <div className="relative shrink-0">
                            <div className="shadow-[0_0_15px_rgba(192,57,43,0.4)] group-hover:shadow-[0_0_20px_rgba(192,57,43,0.6)] p-0.5 border-2 border-primary rounded-full w-14 h-14 transition-all duration-300">
                                <div className="flex justify-center items-center bg-surface-container-highest rounded-full w-full h-full overflow-hidden">
                                    <span className="text-primary font-black text-xl italic drop-shadow-[0_0_5px_rgba(192,57,43,1)]">MM</span>
                                </div>
                            </div>
                        </div>
                        {/* Brand Text */}
                        <div className="flex flex-col leading-tight">
                            <span className="font-headline font-black text-white text-base lg:text-lg uppercase tracking-tighter whitespace-nowrap">
                                MIHAI
                            </span>
                            <span className="opacity-90 font-label font-bold text-[10px] text-primary lg:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
                                MOTORS
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-2 lg:space-x-8 xl:space-x-10">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `font-headline tracking-tighter uppercase font-bold text-sm transition-all duration-300 ${isActive
                                        ? 'text-primary border-b-2 border-primary pb-1'
                                        : 'text-white/80 hover:text-primary hover:scale-105'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA and Hamburger */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/appointment"
                            className="hidden sm:block shadow-[0_0_15px_rgba(192,57,43,0.3)] px-6 py-2.5 rounded-lg font-headline font-black text-white text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 liquid-gradient"
                        >
                            Book Now
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden flex items-center justify-center text-white/80 hover:text-primary transition-colors"
                        >
                            <span className="text-3xl material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-[320px] bg-[#131313] border-l border-white/10 z-[9999] shadow-2xl transition-transform duration-500 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} opacity-100`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-8">
                            <div className="relative">
                                <div className="shadow-[0_0_20px_rgba(192,57,43,0.3)] p-1 border-2 border-primary rounded-full w-20 h-20">
                                    <div className="flex justify-center items-center bg-surface-container-highest rounded-full w-full h-full overflow-hidden">
                                        <span className="text-primary font-black text-2xl italic">MM</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <span className="text-3xl material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <h2 className="mb-1 font-headline font-black text-white text-2xl tracking-tight">MIHAI MOTORS</h2>
                        <p className="mb-6 font-bold text-[10px] text-white/40 uppercase tracking-[0.2em]">Premium Automotive Service</p>

                        {/* Social Icons */}
                        <div className="flex space-x-3 mb-8">
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-highest text-white/60 hover:bg-primary hover:text-white transition-all"><i className='bx bxl-facebook text-xl'></i></a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-highest text-white/60 hover:bg-primary hover:text-white transition-all"><i className='bx bxl-instagram text-xl'></i></a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-highest text-white/60 hover:bg-primary hover:text-white transition-all"><i className='bx bxl-twitter text-xl'></i></a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-highest text-white/60 hover:bg-primary hover:text-white transition-all"><i className='bx bxl-whatsapp text-xl'></i></a>
                        </div>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex flex-col flex-1 gap-2 px-4 py-2 pb-24 overflow-y-auto no-scrollbar">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <span className="material-symbols-outlined">{
                                    link.name === 'Home' ? 'home' :
                                        link.name === 'About' ? 'info' :
                                            link.name === 'Services' ? 'build' :
                                                link.name === 'Inventory' ? 'directions_car' :
                                                    link.name === 'Gallery' ? 'gallery_thumbnail' :
                                                        'support_agent'
                                }</span>
                                <span>{link.name}</span>
                            </NavLink>
                        ))}

                        <div className="flex justify-between items-center bg-surface-container-highest/40 mt-4 ml-3 p-3 border border-white/5 rounded-xl">
                            <span className="font-bold text-white/60 text-[10px] uppercase tracking-widest">Switch Theme</span>
                            <button onClick={toggleTheme}
                                className="flex justify-center items-center bg-surface hover:bg-primary/20 rounded-lg w-10 h-10 transition-all">
                                <span className="hidden dark:block text-lg material-symbols-outlined">light_mode</span>
                                <span className="dark:hidden block text-lg material-symbols-outlined">dark_mode</span>
                            </button>
                        </div>

                        {/* Sidebar Footer inside scrollable nav */}
                        <div className="mt-auto p-4 border-white/5 border-t">
                            <p className="text-[10px] text-white/40 leading-relaxed">
                                &copy; {new Date().getFullYear()} Mihai Motors. All rights reserved.<br />
                                <span className="block mt-2">Designed for premium automotive experiences.</span>
                                {/* <a href="https://pradhansangam.com.np" target="_blank" rel="noopener noreferrer"
                                    className="block mt-2 text-primary/60 hover:text-primary transition-colors">by dev-sangam</a> */}
                            </p>
                        </div>
                    </nav>
                </div>
            </aside>
        </nav>
    );
};

export default Header;
