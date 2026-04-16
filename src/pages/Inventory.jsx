import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { INVENTORY_DATA } from '../data/inventory';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('All Models');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [condition, setCondition] = useState('All Inventory');

  const toggleMake = (make) => {
    setSelectedMakes(prev => 
      prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]
    );
  };

  const filteredCars = INVENTORY_DATA.filter(car => {
    // 1. Tab filter
    if (activeTab !== 'All Models' && car.category !== activeTab) return false;
    
    // 2. Make filter
    if (selectedMakes.length > 0 && !selectedMakes.includes(car.make)) return false;

    // 3. Condition filter
    if (condition !== 'All Inventory' && car.condition !== condition) return false;

    return true;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <>
      <PageBanner title="Inventory" currentPath="Inventory" />
      <section className="mb-20 px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] mb-6 tracking-tight">
              Curated <span className="italic text-primary">Masterpieces</span>
            </h1>
            <p className="text-secondary font-body text-lg leading-relaxed max-w-lg">
              Explore our selection of performance heritage and future classics. Each vehicle is vetted by our master technicians.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 border-b border-outline-variant/15 pb-4">
            {['All Models', 'Grand Tourers', 'Supercars', 'Heritage', 'Performance'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`text-xs uppercase tracking-[0.2em] font-bold pb-2 transition-colors ${
                   activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-on-surface'
                 }`}
               >
                 {tab}
               </button>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-16 px-12 max-w-screen-2xl mx-auto mb-24">
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Price Range</h3>
            <div className="space-y-4">
              <div className="h-0.5 bg-surface-container-highest relative">
                <div className="absolute inset-y-0 left-0 right-1/4 bg-primary"></div>
              </div>
              <div className="flex justify-between text-[10px] font-label text-secondary tracking-widest">
                <span>$100,000</span>
                <span>$2,500,000+</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Manufacturer</h3>
            <div className="grid grid-cols-1 gap-3">
              {['Ferrari', 'Porsche', 'Lamborghini', 'McLaren', 'Aston Martin', 'Hyundai', 'Toyota', 'Honda'].map(make => (
                 <label key={make} className="flex items-center gap-3 cursor-pointer group">
                   <input 
                     type="checkbox" 
                     className="hidden" 
                     checked={selectedMakes.includes(make)}
                     onChange={() => toggleMake(make)}
                   />
                   <div className={`w-4 h-4 border transition-colors ${selectedMakes.includes(make) ? 'border-primary bg-primary/10' : 'border-outline-variant group-hover:border-primary'}`}></div>
                   <span className={`text-xs uppercase tracking-widest ${selectedMakes.includes(make) ? 'text-on-surface' : 'text-secondary group-hover:text-on-surface'}`}>{make}</span>
                 </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Condition</h3>
            <select 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)} 
              className="w-full bg-surface-container border-none text-xs uppercase tracking-widest p-4 focus:ring-0 focus:outline-none text-on-surface appearance-none"
            >
              <option value="All Inventory">All Inventory</option>
              <option value="Factory New">Factory New</option>
              <option value="Certified Pre-Owned">Certified Pre-Owned</option>
            </select>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {filteredCars.map(car => (
              <div key={car.id} className="group relative bg-surface-container-low">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img alt={car.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} />
                  {car.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                      {car.tag}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary block mb-2 font-bold">{car.year}</span>
                      <h3 className="font-serif text-3xl tracking-tight text-on-surface">{car.model}</h3>
                    </div>
                    <span className="text-xl font-serif text-on-surface">{formatPrice(car.price)}</span>
                  </div>
                  <div className="flex gap-8 mb-8 text-[10px] uppercase tracking-widest text-secondary">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined !text-[14px]">speed</span>
                      {car.hp} HP
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined !text-[14px]">distance</span>
                      {formatNumber(car.miles)} MILES
                    </span>
                  </div>
                  <Link to={`/offer?car=${car.id}`} className="block text-center w-full py-4 bg-primary-container text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-red-800 active:scale-[0.98]">
                    I'm Interested
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <span className="text-secondary text-lg font-label uppercase tracking-widest">No vehicles match your criteria.</span>
            </div>
          )}

          {filteredCars.length > 0 && (
            <div className="mt-20 flex items-center justify-center gap-12">
              <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">west</button>
              <div className="flex gap-8 text-[10px] font-bold tracking-[0.3em]">
                <span className="text-primary border-b border-primary pb-1">01</span>
              </div>
              <button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">east</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Inventory;
