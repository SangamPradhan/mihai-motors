import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PageBanner from '../components/PageBanner';

const MySwal = withReactContent(Swal);

// --- EMAILJS CONFIGURATION ---
// Replace these with your actual IDs from the EmailJS Dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_coz1zts';
const EMAILJS_TEMPLATE_ID = 'template_4qwzgc8';
const EMAILJS_PUBLIC_KEY = 'IlDSeLG8CdU6rZ3Kk';

const Appointment = () => {
    const location = useLocation();
    const [serviceType, setServiceType] = useState('fix');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // If they came from inventory with ?car=id, we might preselect acquisition or something
        const queryParams = new URLSearchParams(location.search);
        if (queryParams.has('car')) {
            setServiceType('buy');
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            service_type: serviceType,
            preferred_date: formData.date,
            message: formData.message || 'No additional message',
            subject: `New Appointment Request: ${serviceType.toUpperCase()}`
        };

        try {
            // Functional Email Send
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

            await MySwal.fire({
                title: <span className="font-headline">Request Received</span>,
                html: <p className="font-body text-secondary">Your concierge appointment for {serviceType} has been scheduled. Expect a confirmation shortly.</p>,
                icon: 'success',
                background: '#121212',
                color: '#ffffff',
                confirmButtonColor: '#c0392b',
                confirmButtonText: 'PROCEED',
                customClass: {
                    popup: 'border border-outline-variant/20 rounded-none',
                    confirmButton: 'font-label tracking-[0.2em] uppercase px-8 py-3'
                }
            });

            setFormData({ name: '', phone: '', email: '', date: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);

            MySwal.fire({
                title: <span className="font-headline">Booking Error</span>,
                text: 'Our technical systems are momentarily offline. Please contact our Maranello office directly.',
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
            <PageBanner title="Book Appointment" currentPath="Appointment" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start px-12 max-w-7xl mx-auto w-full mb-24">
                <div className="lg:col-span-5 space-y-8">
                    <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight text-on-surface">
                        Precision <br /><span className="text-primary">Concierge.</span>
                    </h1>
                    <p className="font-body text-secondary text-lg leading-relaxed max-w-md">
                        Schedule your private consultation or technical service within our obsidian sanctuary. Every detail is engineered for excellence.
                    </p>

                    <div className="pt-8 space-y-12">
                        <div className="flex flex-col gap-2">
                            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Location</span>
                            <p className="font-headline text-2xl text-on-surface">Viale Enzo Ferrari, 1, Maranello</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Inquiries</span>
                            <p className="font-headline text-2xl text-on-surface">+39 0536 949111</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-16 border-l border-outline-variant/10">
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 font-body text-on-surface focus:border-primary focus:ring-0 transition-all outline-none"
                                placeholder="Lorenzo Mario"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-1">
                                <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Phone Number</label>
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 font-body text-on-surface focus:border-primary focus:ring-0 transition-all outline-none"
                                    placeholder="+1 (555) 000-0000"
                                    type="tel"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Email Address</label>
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 font-body text-on-surface focus:border-primary focus:ring-0 transition-all outline-none"
                                    placeholder="lorenzo@motors.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Service Required</label>
                            <div className="relative">
                                <select
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 font-body text-on-surface focus:border-primary focus:ring-0 transition-all appearance-none cursor-pointer outline-none"
                                >
                                    <option value="buy" className="bg-surface-container-highest">I want to buy a car</option>
                                    <option value="fix" className="bg-surface-container-highest">I want to fix my car</option>
                                    <option value="sell" className="bg-surface-container-highest">I want to sell my car</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-0 top-3 pointer-events-none text-outline">expand_more</span>
                            </div>
                        </div>

                        {(serviceType === 'fix' || serviceType === 'buy') && (
                            <div className="space-y-1 animate-in fade-in duration-500">
                                <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Preferred Date</label>
                                <input
                                    required
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 font-body text-on-surface focus:border-primary focus:ring-0 transition-all [color-scheme:dark] outline-none"
                                    type="date"
                                />
                            </div>
                        )}

                        {serviceType === 'sell' && (
                            <div className="space-y-4 animate-in fade-in duration-500">
                                <label className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">Vehicle Assets</label>
                                <div className="group relative flex flex-col items-center justify-center border border-dashed border-outline-variant/40 py-12 px-6 hover:border-primary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors mb-2">upload_file</span>
                                    <span className="font-label text-xs uppercase tracking-[0.15em] text-secondary">Upload High-Res Imagery</span>
                                    <span className="text-[10px] text-outline-variant mt-1">PNG, JPG, HEIC up to 20MB</span>
                                    <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                                </div>
                            </div>
                        )}

                        <div className="pt-8">
                            <button
                                disabled={isSubmitting}
                                className={`w-full py-5 text-white font-label text-sm uppercase tracking-[0.3em] font-bold hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${isSubmitting ? 'bg-secondary cursor-not-allowed' : 'bg-primary'}`}
                                type="submit"
                            >
                                {isSubmitting ? 'Processing...' : 'Confirm Appointment'}
                                {!isSubmitting && <span className="material-symbols-outlined">arrow_right_alt</span>}
                            </button>

                            <p className="mt-6 text-[10px] text-outline text-center uppercase tracking-[0.15em] leading-relaxed">
                                By clicking confirm, you agree to our <a className="underline hover:text-primary" href="#">concierge terms</a> and <a className="underline hover:text-primary" href="#">privacy standards</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Appointment;
