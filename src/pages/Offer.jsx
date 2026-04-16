import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PageBanner from '../components/PageBanner';
import { INVENTORY_DATA } from '../data/inventory';

const MySwal = withReactContent(Swal);

// --- EMAILJS CONFIGURATION ---
// Replace these with your actual IDs from the EmailJS Dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_coz1zts';
const EMAILJS_TEMPLATE_ID = 'template_axacugr';
const EMAILJS_PUBLIC_KEY = 'IlDSeLG8CdU6rZ3Kk';

const Offer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const carId = parseInt(queryParams.get('car'));

  const car = INVENTORY_DATA.find(c => c.id === carId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    offerAmount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!car && carId) {
      // If car ID is invalid, redirect to inventory
      // navigate('/inventory');
    }
  }, [car, carId, navigate]);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-12 text-center">
        <h2 className="font-headline text-4xl text-on-surface mb-6">Vehicle Not Found</h2>
        <p className="text-secondary max-w-md mb-8">The vehicle you are looking for might have been sold or is no longer available in our inventory.</p>
        <Link to="/inventory" className="px-8 py-4 bg-primary text-white text-xs uppercase tracking-[0.3em] font-bold">Return to Inventory</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template params for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `Purchase Offer — ${car.year} ${car.make} ${car.model}`,
      message: `Phone: ${formData.phone}
                Vehicle: ${car.year} ${car.make} ${car.model}
                Listed Price: $${car.price.toLocaleString()}
                Offer Amount: $${formData.offerAmount}
                Message: ${formData.message || 'None'}`
    };

    try {
      // Functional Email Send
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      await MySwal.fire({
        title: <span className="font-headline">Offer Submitted!</span>,
        html: <p className="font-body text-secondary">Your purchase offer for the {car.model} has been sent. Our team will contact you shortly.</p>,
        icon: 'success',
        background: '#121212',
        color: '#ffffff',
        confirmButtonColor: '#c0392b',
        confirmButtonText: 'EXCELLENT',
        customClass: {
          popup: 'border border-outline-variant/20 rounded-none',
          confirmButton: 'font-label tracking-[0.2em] uppercase px-8 py-3'
        }
      });

      setFormData({ name: '', email: '', phone: '', offerAmount: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);

      MySwal.fire({
        title: <span className="font-headline">Submission Error</span>,
        text: 'We encountered an issue sending your offer. Please check your connection or contact us directly.',
        icon: 'error',
        background: '#121212',
        color: '#ffffff',
        confirmButtonColor: '#c0392b',
        customClass: {
          popup: 'border border-outline-variant/20 rounded-none'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner title="Make An Offer" currentPath="Vehicle Offer" />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 mb-24">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column: Scrollable Vehicle Details */}
          <div className="w-full lg:w-[60%] space-y-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm group">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-primary text-white text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 uppercase">
                  {car.condition}
                </span>
                {car.tag && (
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 uppercase border border-white/20">
                    {car.tag}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/20 pb-8">
                <div>
                  <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-2 block">{car.year} {car.make}</span>
                  <h1 className="font-headline text-5xl md:text-6xl text-on-surface tracking-tight">{car.model}</h1>
                </div>
                <div className="text-right">
                  <span className="text-secondary text-xs uppercase tracking-widest block mb-1">Listed Price</span>
                  <span className="font-headline text-4xl text-on-surface">${car.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-outline-variant/20">
                <div className="space-y-1">
                  <span className="text-secondary text-[10px] uppercase font-bold tracking-widest">Power</span>
                  <p className="text-on-surface font-headline text-2xl">{car.hp} HP</p>
                </div>
                <div className="space-y-1">
                  <span className="text-secondary text-[10px] uppercase font-bold tracking-widest">Mileage</span>
                  <p className="text-on-surface font-headline text-2xl">{car.miles.toLocaleString()} MI</p>
                </div>
                <div className="space-y-1">
                  <span className="text-secondary text-[10px] uppercase font-bold tracking-widest">Category</span>
                  <p className="text-on-surface font-headline text-2xl">{car.category}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-secondary text-[10px] uppercase font-bold tracking-widest">Year</span>
                  <p className="text-on-surface font-headline text-2xl">{car.year}</p>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="font-headline text-2xl text-on-surface">Vehicle Description</h3>
                <p className="text-secondary font-body text-lg leading-relaxed antialiased">
                  {car.description || "Experience the pinnacle of automotive engineering with this exceptional vehicle. Every curve and component has been designed to deliver an unforgettable driving experience, blending heritage performance with modern reliability. This vehicle has undergone a rigorous inspection by our certified technicians to ensure it meets our highest standards of excellence."}
                </p>

                <div className="space-y-4 pt-8">
                  <h3 className="font-headline text-2xl text-on-surface">Experience the Legacy</h3>
                  <p className="text-secondary font-body">Our vehicles represent more than just transportation; they are moving art. At Mario Motors, we specialize in curating the finest automotive machines for the discerning collector and enthusiast.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-widest uppercase font-bold text-primary">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Comprehensive history report
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Master technician multi-point check
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Nationwide enclosed transport
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Bespoke financing available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] xl:w-[35%]">
            <div className="sticky top-32 bg-surface-container p-8 md:p-12 border border-outline-variant/15 shadow-2xl">
              <h2 className="font-headline text-3xl text-on-surface mb-2">Secure Purchase Offer</h2>
              <p className="text-secondary text-sm mb-10 leading-relaxed font-body">Submit your formal interest or bid. Our VIP acquisitions team will contact you within 12 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-outline-variant/30 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant/30 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant/30 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">Your Offer Amount (USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">$</span>
                    <input
                      required
                      type="number"
                      name="offerAmount"
                      value={formData.offerAmount}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant/30 p-4 pl-8 text-white focus:outline-none focus:border-primary transition-colors text-sm font-bold"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-[9px] text-secondary mt-1 italic italic">Current list price: ${car.price.toLocaleString()}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">Additional Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-surface border border-outline-variant/30 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    placeholder="Inquire about delivery, financing, or part-exchange options..."
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-5 text-white text-xs uppercase tracking-[0.4em] font-bold transition-all relative overflow-hidden group ${isSubmitting ? 'bg-secondary cursor-not-allowed' : 'bg-primary hover:bg-primary-container active:scale-[0.98]'}`}
                >
                  <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>
                    Submit Purchase Offer
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>

                <div className="pt-4 text-center">
                  <p className="text-[10px] text-secondary leading-relaxed antialiased">
                    By submitting this form, you agree to our Terms of Acquisition. Our specialists will verify your details before processing.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
