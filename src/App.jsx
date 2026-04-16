import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Inventory from './pages/Inventory';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Offer from './pages/Offer';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Loader />
      <Header />
      <main className={`flex-grow ${isHome ? '' : 'pt-24'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
