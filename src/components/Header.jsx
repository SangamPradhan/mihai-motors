import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="text-xl tracking-[0.25em] font-light text-neutral-100 font-serif uppercase">
          MIHAI MOTORS
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/inventory"
          >
            Cars
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-serif tracking-widest uppercase text-sm transition-colors ${isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(192,57,43,0.8)] font-bold underline underline-offset-4'
                : 'text-neutral-400 hover:text-neutral-100'
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <Link
          to="/appointment"
          className="ignite-button px-6 py-3 text-white font-label text-xs tracking-widest uppercase font-bold"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Header;
