import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-1">
          <div className="text-2xl tracking-[0.25em] font-light text-neutral-100 mb-8 font-serif uppercase">
            MARIO MOTORS
          </div>
          <p className="text-neutral-500 font-sans text-sm tracking-wider leading-relaxed">
            The intersection of mechanical precision and aesthetic brilliance.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-neutral-100 font-serif tracking-[0.2em] uppercase text-xs mb-4">Navigation</h4>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/inventory">Inventory</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/services">Services</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/contact">Sell Your Car</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/services">Restorations</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-neutral-100 font-serif tracking-[0.2em] uppercase text-xs mb-4">Company</h4>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/about">Careers</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/">Privacy Policy</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/">Terms of Service</Link>
          <Link className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" to="/">Cookie Policy</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-neutral-100 font-serif tracking-[0.2em] uppercase text-xs mb-4">Connect</h4>
          <p className="text-neutral-500 font-sans text-sm tracking-wider mb-2">1221 Apex Drive, Industrial District</p>
          <a className="text-neutral-500 hover:text-red-500 transition-colors font-sans text-sm tracking-wider" href="mailto:contact@mariomotors.com">contact@mariomotors.com</a>
          <div className="flex space-x-6 mt-4">
            <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors" data-icon="public">public</span>
            <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors" data-icon="share">share</span>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-500 font-sans text-xs tracking-widest uppercase">
        <span>© 2025 Mario Motors. All rights reserved.</span>
        <div className="mt-4 md:mt-0 space-x-8">
          <span>Obsidian Gallery Design System</span>
          <span>V1.0.4</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
