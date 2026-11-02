import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import viewCar from "../assets/card.png";
import { INVENTORY_DATA } from '../data/inventory';

const Home = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-behind').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-32 md:pt-40 pb-8 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-black overflow-hidden">
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 h-full flex flex-col items-center">

          {/* Text Layer: We Fix We Flip & Tagline */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between z-0 pointer-events-none mt-10 -mb-20 md:-mb-48 lg:-mb-64">

            {/* Left: We Fix We Flip */}
            <div className="flex flex-col transform -rotate-3 transition-all duration-700" style={{ transitionDelay: '0.5s' }}>
              <h1 className="font-sans font-black italic text-[5rem] lg:text-[7.5rem] tracking-tighter leading-[0.75] text-white drop-shadow-2xl whitespace-nowrap">
                We <span className="text-[#cc0000]">Fix</span>
              </h1>
              <h1 className="font-sans font-black italic text-[5rem] lg:text-[7.5rem] tracking-tighter leading-[0.75] text-white drop-shadow-2xl whitespace-nowrap">
                We <span className="text-[#cc0000]">Flip</span>
              </h1>
            </div>

            {/* Right: Tagline */}
            <div className="hidden md:block border-2 border-amber-500/40 rounded-[40px] px-8 py-5 bg-black/40 backdrop-blur-sm pointer-events-auto">
              <p className="font-bold text-amber-500 text-center font-sans text-lg lg:text-xl tracking-wider leading-tight drop-shadow-lg max-w-[200px]">
                Every car deserves<br />a second life!
              </p>
            </div>
          </div>

          {/* Car Image: Centered and Scaled */}
          <div className="relative z-0 flex justify-center w-full max-w-6xl mx-auto items-center">
            <img
              alt="Supercar"
              className="w-full h-auto max-h-[85vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,1)] scale-110 md:scale-125 transition-transform"
              src={viewCar}
            />
          </div>

          {/* Action Buttons */}
          <div className="relative z-30 flex flex-col items-center gap-6 -mt-16 md:-mt-28 mb-10">
            <div className="flex justify-center items-center gap-3 md:gap-8">
              <Link to="/contact" className="flex items-center justify-center w-11 h-11 md:w-16 md:h-16 rounded-full border-2 border-neutral-500 hover:border-white bg-black/60 backdrop-blur-md transition-all hover:scale-110 group shadow-2xl">
                <span className="material-symbols-outlined text-neutral-200 text-xl md:text-2xl">call</span>
              </Link>

              <Link to="/inventory" className="bg-[#cc0000] hover:bg-red-700 text-white px-6 md:px-14 py-3 md:py-5 rounded-full font-black text-sm md:text-xl tracking-widest flex items-center gap-2 md:gap-3 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(204,0,0,0.5)]">
                EXPLORE FLEET
                <span className="material-symbols-outlined font-black text-xl md:text-2xl">arrow_forward</span>
              </Link>

              <Link to="/contact" className="flex items-center justify-center w-11 h-11 md:w-16 md:h-16 rounded-full border-2 border-neutral-500 hover:border-white bg-black/60 backdrop-blur-md transition-all hover:scale-110 group shadow-2xl">
                <span className="material-symbols-outlined text-neutral-200 text-xl md:text-2xl">chat_bubble</span>
              </Link>
            </div>

            {/* Mobile Quote Section */}
            <div className="md:hidden border-2 border-amber-500/40 rounded-[30px] px-6 py-3 bg-black/40 backdrop-blur-sm">
              <p className="font-bold text-amber-500 text-center font-sans text-sm tracking-widest leading-tight drop-shadow-lg">
                Every car deserves a second life!
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-surface py-32 fade-in">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <p className="text-2xl md:text-4xl font-headline leading-relaxed text-on-surface mb-8">
            Defining automotive excellence since 2015. We breathe life into forgotten engineering and curate the finest luxury fleet in the city.
          </p>
          <Link className="inline-block font-label text-primary tracking-[0.2em] uppercase text-sm border-b border-primary/30 hover:border-primary transition-all pb-1" to="/about">
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-24 px-12 max-w-screen-2xl mx-auto fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          <div className="md:col-span-2 relative group overflow-hidden bg-neutral-900 fade-in">
            <img alt="Bespoke Interiors" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEvN_gVSS4l02dwJiFkFU9VyyWrayBIUjhuy4pwipcRy1NvPzO9Co1WNkJFd4U-g9ysXSY8lsVsCpG42D5s_2Sb87tReq8q8MwD3WC7TBnVPhxuolpEJqk8TyM40fRDOLiKN3kW1g2YNtcdeBEh00GWzAP9vRMHv9xm7PPUPQpIwK9JIcx0875XXFYHimi42WcRQPS7yZIeYv_sI_LsHPbzT-YsQaO96yjob05MtY_ZRz4BSeYKs9WEDChCkbilXvtt2rJ-x7Wwu0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-headline mb-2">Bespoke Refinement</h3>
              <p className="text-secondary text-sm tracking-widest uppercase">Interiors tailored to your soul</p>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-neutral-900 fade-in delay-200">
            <img alt="Engine Upgrades" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWfqPN4Cc30yzFRXzbUjBrE9QGX0Ys4j3MvmDcFZkTG6Bnq0k5e3i_XdtQDo2MHuIGQPVqBeeONev5OzagLKSBffTEge9cfZq7R1ieTwBlfWNnN6U6FNjSU94IrVfFhhJVvgj34wT_YJv5tFPWrh6KhnB6krXr58hFROOGcsgRozXd1clJezRDgqFs0u4KB3XPRrVAyTNYo7fGSrQSmvMtwapPguYDFTM3ScixxzPFJyrMK5Tt0635_vac1M3QRgpmH0NrrsaOiPo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-headline mb-2">Power Unbound</h3>
              <p className="text-secondary text-sm tracking-widest uppercase">Stage 3 Tuning & Calibration</p>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-neutral-900 fade-in">
            <img alt="Classic Restorations" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRz7W9DEwb1_njtHx6_4nX2G_a9FNOJU3LKQ3SJHi1M7TXuGExdfiCpCuFk49FdpR907BgnRh5GFh2dFwKxmKw3jWj7l03SpTegLMX9uxJBeKLhrUQP56ZFBjRR29kYjaWc1HzR6BPBpfcvt9DvqC_uXzRR-CTgYkKUTShrNxmhVrB2CHOYkfV9E-ZjGucXU9tI7u93lAan3IEFjAt9SWqOvOU3To_75j81t0oVs8s9Wvot80On65J0DjWFWX5CG1zOE7nfJYz-M" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-headline mb-2">The Classics</h3>
              <p className="text-secondary text-sm tracking-widest uppercase">Preserving Automotive History</p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden bg-neutral-900 fade-in delay-200">
            <img alt="Fleet" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk6zICDXDN6h8D2n5cOm0qiq0zGr7nxPICYx86ncaEEkJR2Q3hXbb6158LJTR0GVFJ9bHF081SfmUOrD2FdfNQp4VaOP1GuDgGzraM5nplToDsfZBqk6RRGAw0xUZcbxirrsFwZE2y179-DujnhycJyjQnSbAXLHcbXHJ53D5ru8JlIIA0LxynN6eDdAt0aIXurCGxDaX1n_3mCkFoM5Ha34Nw8FM-ktxGymOgvvJRklHMEtS4mHNIQE5gDdjyqZT09IQb77wDPF8" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-headline mb-2">Curated Inventory</h3>
              <p className="text-secondary text-sm tracking-widest uppercase">Hand-picked excellence for sale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-900/50 fade-in">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="mb-20">
            <span className="text-primary font-label tracking-[0.4em] uppercase text-xs mb-4 block">Precision Care</span>
            <h2 className="text-5xl font-headline tracking-tight">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-800 border border-outline-variant/30 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="home_repair_service">home_repair_service</span>
              </div>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">Car Repair</h4>
              <p className="text-secondary leading-relaxed">Full structural and mechanical restoration using OEM parts and precision tools.</p>
            </div>
            <div className="group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-800 border border-outline-variant/30 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="settings_input_component">settings_input_component</span>
              </div>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">Engine Upgrades</h4>
              <p className="text-secondary leading-relaxed">Performance mapping, turbo installations, and exhaust system optimization.</p>
            </div>
            <div className="group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-800 border border-outline-variant/30 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="format_paint">format_paint</span>
              </div>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">Paint Jobs</h4>
              <p className="text-secondary leading-relaxed">Custom automotive finishes including matte, pearlescent, and protective wraps.</p>
            </div>
            <div className="group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-800 border border-outline-variant/30 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="fact_check">fact_check</span>
              </div>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">Inspection</h4>
              <p className="text-secondary leading-relaxed">Rigorous 250-point diagnostic check for pre-purchase or safety compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-outline-variant/10 bg-surface fade-in">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline font-extrabold text-on-surface mb-2">500+</span>
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs">Cars Repaired</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline font-extrabold text-on-surface mb-2">10</span>
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs">Years Experience</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline font-extrabold text-on-surface mb-2">100%</span>
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs">Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Available Fleet Showcase */}
      <section className="py-32 overflow-hidden fade-in">
        <div className="max-w-screen-2xl mx-auto px-12 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <span className="text-primary font-label tracking-[0.35em] uppercase text-xs font-bold block mb-2">
              Featured British Showroom
            </span>
            <h2 className="text-4xl sm:text-5xl font-headline">Available Fleet</h2>
          </div>
          <Link to="/inventory" className="font-label text-primary tracking-[0.3em] uppercase text-sm flex items-center gap-2 hover:translate-x-2 transition-transform group">
            View All ({INVENTORY_DATA.length}) <span className="material-symbols-outlined text-sm transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>

        <div 
          className="flex overflow-x-auto hide-scrollbar gap-8 px-12 pb-12 snap-x snap-mandatory"
          onWheel={(e) => { e.currentTarget.scrollLeft += e.deltaY; }}
        >
          {INVENTORY_DATA.slice(0, 8).map((car, index) => (
            <Link
              key={car.id}
              to={`/offer?car=${car.id}`}
              className={`min-w-[360px] md:min-w-[420px] bg-neutral-900 group snap-center border border-neutral-800 hover:border-primary/50 transition-all flex flex-col justify-between block fade-in ${
                index % 2 === 1 ? 'delay-200' : ''
              }`}
            >
              <div className="h-64 overflow-hidden relative bg-black">
                <img 
                  alt={`${car.make} ${car.model}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={car.image} 
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 text-[9px] tracking-widest uppercase text-white font-bold border border-white/10">
                  {car.category}
                </div>
                <div className="absolute top-4 right-4 bg-primary px-3 py-1 text-[10px] tracking-widest uppercase text-white font-black shadow-md">
                  {car.tag || car.condition}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                      {car.year} {car.make}
                    </span>
                    <h3 className="text-2xl font-headline group-hover:text-primary transition-colors text-white line-clamp-1">
                      {car.model}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[9px] uppercase tracking-widest text-secondary block mb-0.5">Price</span>
                    <span className="text-2xl font-headline text-primary font-bold">
                      £{car.price.toLocaleString('en-GB')}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 text-secondary text-xs tracking-widest uppercase pt-4 border-t border-neutral-800/80">
                  <span>{car.hp} HP</span>
                  <span>•</span>
                  <span>{car.miles.toLocaleString('en-GB')} Miles</span>
                  <span>•</span>
                  <span className="text-primary font-bold">Inquire</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black py-32 fade-in">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-headline mb-8 leading-tight">We buy old and broken cars.</h2>
            <p className="text-secondary text-xl max-w-lg mb-12">No matter the condition. We see the potential. Get a competitive UK valuation within 24 hours and direct bank payment in Pounds Sterling.</p>
            <Link to="/contact" className="ignite-button px-12 py-5 text-white font-label text-sm tracking-[0.3em] uppercase font-black inline-block">
              Schedule Appointment
            </Link>
          </div>
          <div className="relative h-[600px] overflow-hidden">
            <img alt="Classic Restoration" className="w-full h-full object-cover grayscale opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ujkKRf4YJqQF502fG0vzsLodJmArU7K7Oh7TJ9be7v0IV6G_Ef5A3EGYR6fLO7RFqL9rp6YGERm6O-zAd8z2WJbrXKqez-W9yg7xHtmBPkiNttdlGKVI6VyKV1jccy8TDvDw1vv-hpJBH2ILP5a2QcTIExuok2b-7b7GTT-O74zgR26PaIoaGJVVH9dKsEjMd-sSjMBRQUb91hbP9m3Ou5mE1YanqZ44XA6CcNItANAdr-KFcoPJjqBzd17nK0sF8igeeacIJHI" />
            <div className="absolute inset-0 border border-primary/20 m-6"></div>
          </div>
        </div>
      </section>

      <section className="py-32 fade-in">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-headline">Editorial</h2>
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs">The Ledger</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <article className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img alt="Vintage restoration" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyni4Cz1O2fjyPv2-JY-YfzlfBGIODPk74-JCg_TJZAIFJj1VdY1iPsU9xe_FazVLvZgBq4U2McVSTJEwB7JdygULoXYa9f9I5AcGW-jb5rJ0HMs37X0mMNE2shPW6-sK-0Iz3RmZP-jEpUspBcgZ-w4cKFZ5XNRykSbHD5I_D7riLSlqG2l5bHb-P8D1mrLLkPxl1k6qFh-ily7x2Jq2VydZoyGr1cQd-1IQtC4-j7QE_WRMwBjttIZZrOzD8ynNqMOa-Hz3cfLw" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-2xl font-headline mb-4">The Art of the Barn Find</h3>
              <p className="text-secondary leading-relaxed mb-6">Uncovering hidden gems and the intricate process of bringing them back to life.</p>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant group-hover:border-primary transition-colors pb-1">Read Entry</span>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img alt="Modern tech" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_VEwrTsBEsXI33xgevO79YmVurayK7SEKQf6PI0NnkHC3HWnsLdx34XmXu6-23CM4IQs_jXhSf0jjaYn2IH5MOuK3W6yp0FR0aQFBnnhzBql0s7hfdYXtHcuDpTe7QEgKrL1jlhiIy3feS9Gio7X9cZvACEx94yqnFxUUCwUBzOxYMzJVLMxLDvK7sTKSzuMRLtSDE_7ho9iDaAAS-yiVddujKMKzXtSDt3PCp06AnsBfjcOChatAfow6y8W4a3aYPAE2I8JYpWc" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-2xl font-headline mb-4">Hybrid vs. Pure ICE</h3>
              <p className="text-secondary leading-relaxed mb-6">Analyzing the future of luxury performance in the age of electrification.</p>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant group-hover:border-primary transition-colors pb-1">Read Entry</span>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img alt="Maintenance" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3BxX3dllzBrs87LJVs9VZjbvIx6kIpcz8wnPG5UqieSqY6P9OuhF-1AOdU6VO9i_pyRZJPpjx3QXUSjt-wRjL9UClOEKLO3xFoH9VKrMky9hdIwFemqDD8v1lriYPHLB6KpaIfjCkNTiU4k8pRBZ4poztTJzRZbeP0Mmggw4VW4qofAVCTO9kcpfcN3OfuZApUXIE8rShQPuZEpNeSMTBIdTg08irw0Y8zTv0UPDaEKJ4-DL0DRGrEw2Me-bKZpM4pAykHNJK-fA" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-2xl font-headline mb-4">Maintenance as Ritual</h3>
              <p className="text-secondary leading-relaxed mb-6">Why periodic servicing is more than just oil changes—it's legacy preservation.</p>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant group-hover:border-primary transition-colors pb-1">Read Entry</span>
            </article>
          </div>
        </div>
      </section>

      <section className="py-40 bg-neutral-900 relative overflow-hidden fade-in">
        <div className="absolute inset-0 opacity-10">
          <img alt="Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Yx17fvLT5nTRU5IbJD9Zf7KHrcQYKeezb_frsVoKguBkR0cu8sAvkC_zTQyP53yGxYhT4vUwIxjgxEwkBibrLsDzZfQAX4sXJOE31MY0AOpHTJvF6DLJt0aO1NPjLtvwfU5Q37JW-GBGnA-sbhjOzm6Z5uk2Pn8H76CPIQT1YS7KeCgbtxZ_-GyMl5EWje4lG-OTUeL47f8JfTLaObHxtxuqaktMSdntkfzPMuMoHsPFowvWaDH1rTWLsc5Zo4cTGUBsiS8hw18" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-headline mb-12 leading-tight">Looking for an exquisite supercar or classic?</h2>
          <Link to="/inventory" className="ignite-button px-12 py-5 text-white font-label text-sm tracking-[0.3em] uppercase font-black shadow-2xl inline-block">
            View Complete UK Catalog
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
