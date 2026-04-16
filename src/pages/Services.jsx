import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Services = () => {
  return (
    <>
      <PageBanner title="Services" currentPath="Services" />
      <section className="px-12 mb-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-6">Expertise <br/><span className="text-primary italic">Refined.</span></h1>
            <p className="text-secondary font-body text-lg max-w-xl leading-relaxed">
                From precision engine calibration to heritage restoration, our technicians treat every vehicle as a mechanical masterpiece. 
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="h-1 w-24 bg-primary"></div>
          </div>
        </div>
      </section>

      <section className="px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10 border border-outline-variant/10">
          <div className="group relative overflow-hidden bg-surface-container p-12 min-h-[450px] flex flex-col justify-between hover:[&>div.bg-accent-line]:w-full transition-colors duration-500 hover:bg-surface-bright">
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary bg-accent-line transition-all duration-500"></div>
            <div>
              <div className="mb-8 text-primary">
                <span className="material-symbols-outlined text-5xl" data-icon="build">build</span>
              </div>
              <h3 className="font-headline text-3xl mb-4 tracking-tight">Precision Repair</h3>
              <p className="text-secondary font-body leading-relaxed mb-6">
                  Beyond simple fixes. We diagnose using surgical precision, ensuring every component meets original factory tolerances or exceeds them.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-label text-xs tracking-widest uppercase text-outline group-hover:text-primary transition-colors">01 — Maintenance</span>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl scale-[2]" data-icon="build">build</span>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-high p-12 min-h-[450px] flex flex-col justify-between hover:[&>div.bg-accent-line]:w-full transition-colors duration-500 hover:bg-surface-bright lg:translate-y-12">
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary bg-accent-line transition-all duration-500"></div>
            <div>
              <div className="mb-8 text-primary">
                <span className="material-symbols-outlined text-5xl" data-icon="settings_input_component">settings_input_component</span>
              </div>
              <h3 className="font-headline text-3xl mb-4 tracking-tight">Engine Performance</h3>
              <p className="text-secondary font-body leading-relaxed mb-6">
                  The heart of the beast. Our engineers specialize in high-output calibration, balancing raw power with sustainable reliability.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-label text-xs tracking-widest uppercase text-outline group-hover:text-primary transition-colors">02 — Engineering</span>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl scale-[2]" data-icon="settings_input_component">settings_input_component</span>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container p-12 min-h-[450px] flex flex-col justify-between hover:[&>div.bg-accent-line]:w-full transition-colors duration-500 hover:bg-surface-bright">
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary bg-accent-line transition-all duration-500"></div>
            <div>
              <div className="mb-8 text-primary">
                <span className="material-symbols-outlined text-5xl" data-icon="format_paint">format_paint</span>
              </div>
              <h3 className="font-headline text-3xl mb-4 tracking-tight">Aesthetic Bodywork</h3>
              <p className="text-secondary font-body leading-relaxed mb-6">
                  Sculpting automotive silhouettes. From carbon fiber repair to concours-level paint correction, we preserve the visual soul of your vehicle.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-label text-xs tracking-widest uppercase text-outline group-hover:text-primary transition-colors">03 — Restoration</span>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl scale-[2]" data-icon="format_paint">format_paint</span>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container-high p-12 min-h-[450px] flex flex-col justify-between hover:[&>div.bg-accent-line]:w-full transition-colors duration-500 hover:bg-surface-bright md:col-span-1 lg:col-span-1">
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary bg-accent-line transition-all duration-500"></div>
            <div>
              <div className="mb-8 text-primary">
                <span className="material-symbols-outlined text-5xl" data-icon="fact_check">fact_check</span>
              </div>
              <h3 className="font-headline text-3xl mb-4 tracking-tight">Master Inspection</h3>
              <p className="text-secondary font-body leading-relaxed mb-6">
                  A 150-point diagnostic audit. We uncover what others miss, providing a transparent blueprint for your car's future performance.
              </p>
            </div>
            <div className="mt-auto">
              <span className="font-label text-xs tracking-widest uppercase text-outline group-hover:text-primary transition-colors">04 — Analysis</span>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl scale-[2]" data-icon="fact_check">fact_check</span>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-surface-container p-12 min-h-[450px] flex flex-col justify-between hover:[&>div.bg-accent-line]:w-full transition-colors duration-500 hover:bg-surface-bright lg:col-span-2 lg:-translate-y-12">
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary bg-accent-line transition-all duration-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-8 text-primary">
                    <span className="material-symbols-outlined text-5xl" data-icon="currency_exchange">currency_exchange</span>
                  </div>
                  <h3 className="font-headline text-3xl mb-4 tracking-tight">Bespoke Flipping</h3>
                  <p className="text-secondary font-body leading-relaxed mb-6">
                      The Mario Motors advantage. We identify high-value assets, restore them to peak condition, and manage the elite market transition for discerning collectors.
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="font-label text-xs tracking-widest uppercase text-outline group-hover:text-primary transition-colors">05 — Asset Management</span>
                </div>
              </div>
              <div className="relative hidden md:block overflow-hidden h-full">
                <img alt="High end luxury vehicle interior detailing" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDrNSj_vgmJ-WmtvsDrmqkzDTVd3OOIbHjVtAXp6sw6a-lO9DR7YXlKNJRJriw_GtynaOnRgSTOSLKdCldlWIak4oHjl2DTETKgZoGwa0vpXn9G-DOH1u4HzbEmeMebDveb9tjuStO_oJJfOuAcTq-Mt7tcqWiwRZbDjuWKc8QCOlTkc3UGZIRtupfXmkO3Lkth7g7AI2T_QW6jkJ5ASg88TX3LTdP9OB2kSO-Gd1i66FjpU7V9tOjb1CRvXs1qIJaDtYQrnHmyC8"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 mt-32 max-w-screen-2xl mx-auto mb-20">
        <div className="bg-surface-container-lowest p-16 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-transparent to-transparent"></div>
          <h2 className="font-headline text-4xl md:text-5xl max-w-2xl relative z-10">Your journey deserves a precision-tuned companion.</h2>
          <div className="flex space-x-6 relative z-10">
            <Link to="/appointment" className="bg-primary hover:bg-[#a93226] text-white px-12 py-5 font-label text-sm tracking-[0.2em] uppercase transition-all">
                Schedule Service
            </Link>
            <Link to="/inventory" className="border border-outline-variant/30 text-on-surface px-12 py-5 font-label text-sm tracking-[0.2em] uppercase hover:bg-surface-bright transition-colors">
                View Spec Sheet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
