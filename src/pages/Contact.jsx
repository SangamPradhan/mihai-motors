import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PageBanner from '../components/PageBanner';

const MySwal = withReactContent(Swal);

// --- EMAILJS CONFIGURATION ---
// Replace these with your actual IDs from the EmailJS Dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_coz1zts';
const EMAILJS_TEMPLATE_ID = 'template_axacugr';
const EMAILJS_PUBLIC_KEY = 'IlDSeLG8CdU6rZ3Kk';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Select Interest',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.subject === 'Select Interest') {
            alert('Please select a subject of interest.');
            return;
        }

        setIsSubmitting(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            recipient_email: 'pradhansangam160@gmail.com'
        };

        try {
            // Functional Email Send
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

            await MySwal.fire({
                title: <span className="font-headline text-3xl">Message Dispatched</span>,
                html: <p className="font-body text-secondary">Your inquiry has been received by our London headquarters. A specialist will review and respond within one business cycle.</p>,
                icon: 'success',
                background: '#121212',
                color: '#ffffff',
                confirmButtonColor: '#c0392b',
                confirmButtonText: 'ACKNOWLEDGED',
                customClass: {
                    popup: 'border border-outline-variant/20 rounded-none',
                    confirmButton: 'font-label tracking-[0.2em] uppercase px-12 py-4'
                }
            });

            setFormData({ name: '', email: '', subject: 'Select Interest', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);

            MySwal.fire({
                title: <span className="font-headline text-3xl">Transmission Failure</span>,
                text: 'The secure communication channel is currently unavailable. Please use the direct phone line for urgent matters.',
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
            <PageBanner title="Contact Us" currentPath="Contact" />
            <section className="px-12 max-w-screen-2xl mx-auto mb-20">
                <h1 className="font-headline text-7xl md:text-8xl font-bold leading-tight tracking-tight mb-4 text-on-surface">Get in <span className="text-primary italic">Touch</span></h1>
                <p className="max-w-2xl text-secondary text-lg font-light leading-relaxed">
                    Experience automotive excellence. Whether you're looking for a bespoke commission or high-performance maintenance, our specialists are ready to assist.
                </p>
            </section>

            <section className="px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                <div className="lg:col-span-7 bg-surface-container p-12 relative overflow-hidden group border border-outline-variant/10 shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45 transition-transform duration-700 group-hover:scale-110"></div>
                    <h2 className="font-headline text-3xl mb-12 text-on-surface">Send an Inquiry</h2>
                    <form className="space-y-12" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative">
                                <input
                                    required
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:border-primary focus:ring-0 placeholder:text-secondary/50 py-4 transition-colors text-on-surface outline-none"
                                    placeholder="Full Name"
                                    type="text"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    required
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:border-primary focus:ring-0 placeholder:text-secondary/50 py-4 transition-colors text-on-surface outline-none"
                                    placeholder="Email Address"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <select
                                required
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:border-primary focus:ring-0 text-on-surface py-4 transition-colors appearance-none outline-none cursor-pointer"
                            >
                                <option disabled value="Select Interest" className="bg-surface">Select Interest</option>
                                <option value="Vehicle Acquisition" className="bg-surface">Vehicle Acquisition</option>
                                <option value="Specialized Service" className="bg-surface">Specialized Service</option>
                                <option value="Media Inquiry" className="bg-surface">Media Inquiry</option>
                                <option value="General Question" className="bg-surface">General Question</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">expand_more</span>
                        </div>

                        <div className="relative">
                            <textarea
                                required
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:border-primary focus:ring-0 placeholder:text-secondary/50 py-4 transition-colors resize-none text-on-surface outline-none"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="pt-4 space-y-4">
                            <button
                                disabled={isSubmitting}
                                className={`flex items-center space-x-4 group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                type="submit"
                            >
                                <span className={`bg-primary text-white px-12 py-5 font-label text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 ${isSubmitting ? '' : 'group-hover:bg-red-800'}`}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <span className="material-symbols-outlined text-sm">send</span>}
                                </span>
                                <span className={`w-12 h-px bg-primary transition-all duration-500 ${isSubmitting ? '' : 'group-hover:w-20'}`}></span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="h-[300px] w-full bg-surface-container-high relative overflow-hidden grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity rounded-sm shadow-md">
                        <img className="w-full h-full object-cover" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhoACcFnucCrJpZIjZcSugsjWFFI5WcIab2WaoIwtEM3yWim4VnNsTid4RLuiLx05sn0bLLx7Jf9TxPUlNq8U-ZhtTaRFferUo6avsFIlxXDDMZvAdpX32nfwsdnRfeYwlgzYcEVw8Qz5rexSDQHn1YVIF7fvpnqAEIXQwWTF5kznlXQ1umujexZ5T4ewyg2DVXH2hOrocOcKrQ2brrrNkW-BsxlqzqzrcoKaE-FNIlcPeop67rHrE2xaepIz_efcd_QGFDFY3En8" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 flex items-center space-x-3 bg-neutral-950/90 px-4 py-2 border border-white/10">
                            <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white font-bold">Mayfair, London HQ</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        <div className="bg-surface-container p-8 flex items-start space-x-6 border border-outline-variant/10 shadow-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline/10">
                                <span className="material-symbols-outlined text-primary">call</span>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-1">Direct Line</p>
                                <p className="text-xl font-headline text-on-surface">+44 (0) 20 7946 0123</p>
                            </div>
                        </div>

                        <div className="bg-surface-container p-8 flex items-start space-x-6 border border-outline-variant/10 shadow-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline/10">
                                <span className="material-symbols-outlined text-primary">mail</span>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-1">Concierge</p>
                                <p className="text-xl font-headline text-on-surface">bespoke@mariomotors.com</p>
                            </div>
                        </div>

                        <div className="bg-surface-container p-8 flex items-start space-x-6 border border-outline-variant/10 shadow-sm">
                            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline/10">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-1">Gallery Hours</p>
                                <p className="text-xl font-headline text-on-surface space-y-1">Mon – Sat: 09:00 – 19:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-32 px-12 max-w-screen-2xl mx-auto border-t border-outline/10 pt-20 mb-32">
                <h3 className="font-headline text-2xl mb-12 italic text-primary">Global Presence</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                    <div className="space-y-4">
                        <span className="text-[10px] font-label tracking-[0.3em] uppercase text-secondary">Studio 01</span>
                        <h4 className="font-headline text-4xl text-on-surface">London</h4>
                        <p className="text-secondary leading-relaxed text-sm">24 Park Lane, Mayfair<br />W1K 1BE, United Kingdom</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-label tracking-[0.3em] uppercase text-secondary">Studio 02</span>
                        <h4 className="font-headline text-4xl text-on-surface">Milan</h4>
                        <p className="text-secondary leading-relaxed text-sm">Via Montenapoleone, 8<br />20121 Milano MI, Italy</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-label tracking-[0.3em] uppercase text-secondary">Studio 03</span>
                        <h4 className="font-headline text-4xl text-on-surface">Dubai</h4>
                        <p className="text-secondary leading-relaxed text-sm">Al Serkal Avenue, Street 8<br />Al Quoz 1, Dubai, UAE</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
