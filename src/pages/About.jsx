import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const About = () => {
  return (
    <>
      <PageBanner title="About Us" currentPath="About Us" />

      <section className="px-12 max-w-screen-2xl mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-secondary font-label text-xs tracking-[0.4em] uppercase mb-6">The Genesis</h2>
            <h1 className="font-headline text-6xl lg:text-8xl leading-tight mb-8">Fuel in the <span className="italic text-primary">Blood.</span></h1>
            <p className="text-secondary text-lg leading-relaxed mb-8 max-w-md">
                Mario's journey didn't begin in a corporate office, but under the chassis of a rusted 1967 GTO in a dimly lit garage. What started as a childhood fascination with internal combustion evolved into a lifelong pursuit of mechanical perfection.
            </p>
            <p className="text-on-surface-variant text-sm leading-loose border-l border-outline-variant/30 pl-6">
                &quot;A car is more than a machine; it's a symphony of engineering and soul. Our task is to ensure that symphony never fades.&quot; — Mario
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[600px] bg-surface-container overflow-hidden">
            <img className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" alt="dramatic close-up of a vintage luxury sports car engine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxMCGeXXPFMYwZmwEvnVRflmoRYsyWKsJrEQAUneKB3V_JD0oMCmA1YbTqGaNSX-o_498H7Jsd8lqFYysEhfLTVtjZtAvlsi4BjX4kzHk_OauAShiKTft2K4D5mBpvA23ZfBK2IwjKBOrTSj1d0vm0KjRdjxpwRQKAi6mPlVwLkvnWiEA5NeqPaan0jx6uWyeF9ZKAndt3UHDDvM2L_dSgUHaYWqbCb31ymyK2EFPnJFGU8QOBRW1ywEllGVO4euEHBo_l5gffkcY"/>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-32 mb-40">
        <div className="px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-outline-variant/20 border-y">
            <div className="p-12 lg:border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="precision_manufacturing">precision_manufacturing</span>
              <h3 className="font-headline text-3xl mb-6">Repair Excellence</h3>
              <p className="text-secondary leading-relaxed">
                  We don't just fix cars; we restore their original dignity using precision diagnostics and artisan techniques.
              </p>
            </div>
            <div className="p-12 lg:border-r border-outline-variant/20 bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="currency_exchange">currency_exchange</span>
              <h3 className="font-headline text-3xl mb-6">The High-End Flip</h3>
              <p className="text-secondary leading-relaxed">
                  Curating rare finds and elevating them through meticulous enhancement for the world's most discerning collectors.
              </p>
            </div>
            <div className="p-12">
              <span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="verified">verified</span>
              <h3 className="font-headline text-3xl mb-6">Unrivaled Quality</h3>
              <p className="text-secondary leading-relaxed">
                  Every vehicle that exits our workshop carries the Mario Motors seal of absolute mechanical integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 max-w-screen-2xl mx-auto mb-20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-secondary font-label text-xs tracking-[0.4em] uppercase mb-4">The Craftsmen</h2>
            <h2 className="font-headline text-5xl">Engineered by <span className="italic">Masters.</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20">
          <div className="bg-surface p-8 group transition-all duration-500 hover:bg-surface-container">
            <div className="aspect-[3/4] mb-8 bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="mechanic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUoiBVSDHLVsSzjgosq3t-VECT2h5JNIhHy8pvTuekK41BqmVJEzNsXPWouUUobKkGsPJjf_XJF3jQYoBucOp1BPnxXAUW4PGQrKIvhoIpJp-HUITu7XV-G9X5ZHfNG_L-cAVJeqbytP6o1JnBPH47GgS3ocJcMpN6PBdPwVwmhMHwFY92oPl360PCpAgR2Nd6vVa-N9dKmccircPq2YGuUYXhJrz6kskSCLQyQiirvKpPYSOo31rO4_xDJqmf9nToARfQ-gYyl2g"/>
            </div>
            <h4 className="font-headline text-2xl mb-1">Alessandro Rossi</h4>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-4">Chief Engineer</p>
            <p className="text-secondary text-sm leading-relaxed">Specialist in Italian V12 engines and transmission optimization.</p>
          </div>
          <div className="bg-surface p-8 group transition-all duration-500 hover:bg-surface-container">
            <div className="aspect-[3/4] mb-8 bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="mechanic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDOK9F3aOPzmQj3GGmkqY2OCy9ll_sYTZWpiWUfKd3iBd3T_yh3cLOkMNRO9MrP-UoSQ63S-xxng_AMnh2xOtX_8ASZgjaUa0of1UbAFA5VIQul75-lZ4-acP6LT7WdpvorTF1BvPuqtsXXMENiRGnwEl5XmfRwobEBSj6PFYOo2hgAgISCU2m4BmpPgfZDoMbOIzaUVaQtbmbf1zhF9wxuHkAGuEyGdNbSJDWfgr0hnJhPOErOOEN4iYbo9Q8CsmiVRlhFY6edOw"/>
            </div>
            <h4 className="font-headline text-2xl mb-1">Julian Schmidt</h4>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-4">Body & Paint Specialist</p>
            <p className="text-secondary text-sm leading-relaxed">Artisan of the 'Obsidian Finish' and composite material restoration.</p>
          </div>
          <div className="bg-surface p-8 group transition-all duration-500 hover:bg-surface-container">
            <div className="aspect-[3/4] mb-8 bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="mechanic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBBNsH1QHl71FEb08EHHDhjdv3wdxgOd_EijiBc47b3KplJbtzChZpd0XQNC8C6b2acqd7t5KMGINhBTo8HekM8Z-ES-ixALUTWxZ8mNVFz1qgXYMVPOZ6-L5e1M0KI0t2ySm7RTefYWEEqOxaDabDGWmXHbTkOMJf-Iced8mP03SGUL9DTn9iMA5fiGS3YSk31SlmP5GUu9mVg8Hl9jDRDbvnEBP3eioS5_fh7--_rHDZ4CmuDYpGpE0YFlv1OAtRUmHF2F06kbw"/>
            </div>
            <h4 className="font-headline text-2xl mb-1">Elias Thorne</h4>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-4">Diagnostics Expert</p>
            <p className="text-secondary text-sm leading-relaxed">Merging legacy mechanics with cutting-edge digital performance tuning.</p>
          </div>
          <div className="bg-surface p-8 group transition-all duration-500 hover:bg-surface-container">
            <div className="aspect-[3/4] mb-8 bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="mechanic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88llZiRRgxMQmHNz3q8isHMiDIOt4z33usdq-ZjP8nXaq2NvjUqUdLoTNvZs588bq5VLFDv9ZrhFOJ1PFVFJmP8PQ-dN5PHWQsZN2nSaf1dEuD0plTCsItCOmnCLOqiWM-NmCL_0NQ-FJFlSg0VAJFbpXOF_8J4z9m7GW_x1r21RMRa4qrnyP40CIm_7W6jNF_eMIMCUsPKzucV0qgTTO2fXDba9W4fVOKEtOR1L9fCeKw48WnLvDhLKyet6s00ZEAFlW3yjUMEc"/>
            </div>
            <h4 className="font-headline text-2xl mb-1">Marcus Mario</h4>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-4">Founder & Lead Curator</p>
            <p className="text-secondary text-sm leading-relaxed">The visionary behind every acquisition and final quality inspection.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
