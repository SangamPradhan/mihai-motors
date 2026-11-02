import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { INVENTORY_DATA } from '../data/inventory';

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(price);
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-GB').format(num);
};

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('All Models');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [condition, setCondition] = useState('All Inventory');
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all categories dynamically from inventory
  const categories = useMemo(() => {
    const cats = Array.from(new Set(INVENTORY_DATA.map(c => c.category)));
    return ['All Models', ...cats];
  }, []);

  // Extract all makes dynamically from inventory
  const allMakes = useMemo(() => {
    return Array.from(new Set(INVENTORY_DATA.map(c => c.make))).sort();
  }, []);

  const toggleMake = (make) => {
    setSelectedMakes(prev => 
      prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]
    );
  };

  const filteredCars = useMemo(() => {
    return INVENTORY_DATA.filter(car => {
      // 1. Tab filter
      if (activeTab !== 'All Models' && car.category !== activeTab) return false;
      
      // 2. Make filter
      if (selectedMakes.length > 0 && !selectedMakes.includes(car.make)) return false;

      // 3. Condition filter
      if (condition !== 'All Inventory' && car.condition !== condition) return false;

      // 4. Price filter
      if (car.price > maxPrice) return false;

      // 5. Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const match = 
          car.make.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.category.toLowerCase().includes(query) ||
          car.year.toString().includes(query) ||
          (car.engine && car.engine.toLowerCase().includes(query)) ||
          (car.tag && car.tag.toLowerCase().includes(query));
        if (!match) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'year-new') return b.year - a.year;
      if (sortBy === 'hp-high') return b.hp - a.hp;
      if (sortBy === 'miles-low') return a.miles - b.miles;
      return a.id - b.id; // default featured
    });
  }, [activeTab, selectedMakes, condition, maxPrice, sortBy, searchQuery]);

  return (
    <>
      <PageBanner title="Inventory" currentPath="Inventory" />
      <section className="mb-14 px-6 sm:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-outline-variant/15">
          <div className="max-w-2xl">
            <span className="text-primary font-label text-xs tracking-[0.35em] uppercase font-bold block mb-3">
              We Fix. We Flip. • Budget-Friendly British Stock
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-4 tracking-tight">
              Revived <span className="italic text-primary">Flips & Cars</span>
            </h1>
            <p className="text-secondary font-body text-base md:text-lg leading-relaxed max-w-xl">
              Every car deserves a second life. From sub-£3k daily runabouts and economical hatchbacks to slick Ford Mustangs and Chevrolet muscle, each vehicle is mechanically sorted, serviced, and priced under budget.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Search Fiesta, Golf, Mustang, Camaro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/20 pl-10 pr-4 py-3 text-xs tracking-wider text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-container border border-outline-variant/20 px-4 py-3 text-xs uppercase tracking-widest text-on-surface focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="featured">Sort: Featured Flips</option>
              <option value="price-low">Price: Low to High (Cheapest First)</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year-new">Year: Newest First</option>
              <option value="hp-high">Power: Highest HP</option>
              <option value="miles-low">Mileage: Lowest First</option>
            </select>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pt-6 pb-2 border-b border-outline-variant/10">
          {categories.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs uppercase tracking-[0.2em] font-bold pb-2 transition-colors whitespace-nowrap ${
                activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 px-6 sm:px-12 max-w-screen-2xl mx-auto mb-24">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 bg-surface-container-low/40 p-6 border border-outline-variant/10 rounded-sm h-fit">
          <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-on-surface">Filter Flips</span>
            {(selectedMakes.length > 0 || condition !== 'All Inventory' || activeTab !== 'All Models' || maxPrice < 30000 || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedMakes([]);
                  setCondition('All Inventory');
                  setActiveTab('All Models');
                  setMaxPrice(30000);
                  setSearchQuery('');
                }}
                className="text-[10px] uppercase tracking-wider text-primary hover:underline font-bold"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Quick Budget Filters */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Quick Budget Filter</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMaxPrice(3000)}
                className={`py-2 px-3 text-[10px] uppercase tracking-wider font-bold border transition-colors ${
                  maxPrice === 3000 ? 'bg-primary text-white border-primary' : 'border-outline-variant/20 text-secondary hover:text-on-surface'
                }`}
              >
                Under £3k
              </button>
              <button
                onClick={() => setMaxPrice(5000)}
                className={`py-2 px-3 text-[10px] uppercase tracking-wider font-bold border transition-colors ${
                  maxPrice === 5000 ? 'bg-primary text-white border-primary' : 'border-outline-variant/20 text-secondary hover:text-on-surface'
                }`}
              >
                Under £5k
              </button>
              <button
                onClick={() => setMaxPrice(10000)}
                className={`py-2 px-3 text-[10px] uppercase tracking-wider font-bold border transition-colors ${
                  maxPrice === 10000 ? 'bg-primary text-white border-primary' : 'border-outline-variant/20 text-secondary hover:text-on-surface'
                }`}
              >
                Under £10k
              </button>
              <button
                onClick={() => setMaxPrice(30000)}
                className={`py-2 px-3 text-[10px] uppercase tracking-wider font-bold border transition-colors ${
                  maxPrice >= 30000 ? 'bg-primary text-white border-primary' : 'border-outline-variant/20 text-secondary hover:text-on-surface'
                }`}
              >
                All Under £30k
              </button>
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Budget Cap</h3>
              <span className="text-xs font-mono font-bold text-on-surface text-primary">
                {maxPrice >= 30000 ? 'Up to £30,000' : formatPrice(maxPrice)}
              </span>
            </div>
            <input 
              type="range"
              min="2000"
              max="30000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer bg-surface-container-highest h-1 rounded"
            />
            <div className="flex justify-between text-[10px] font-label text-secondary tracking-widest mt-2">
              <span>£2,000</span>
              <span>£30,000</span>
            </div>
          </div>

          {/* Condition / Preparation State */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Flip Status</h3>
            <select 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)} 
              className="w-full bg-surface-container border border-outline-variant/20 text-xs uppercase tracking-widest p-3 focus:ring-0 focus:outline-none focus:border-primary text-on-surface"
            >
              <option value="All Inventory">All Cars ({INVENTORY_DATA.length})</option>
              <option value="Fixed & Serviced">Fixed & Serviced</option>
              <option value="Fixed & Restored">Fixed & Restored</option>
            </select>
          </div>

          {/* Manufacturer Filter */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Manufacturer</h3>
              <span className="text-[10px] text-secondary">{selectedMakes.length > 0 ? `${selectedMakes.length} selected` : 'All'}</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5 max-h-72 overflow-y-auto pr-2 hide-scrollbar">
              {allMakes.map(make => {
                const count = INVENTORY_DATA.filter(c => c.make === make).length;
                const isChecked = selectedMakes.includes(make);
                return (
                  <label key={make} className="flex items-center justify-between cursor-pointer group py-1">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={isChecked}
                        onChange={() => toggleMake(make)}
                      />
                      <div className={`w-4 h-4 border transition-colors flex items-center justify-center text-[10px] ${
                        isChecked ? 'border-primary bg-primary text-white font-bold' : 'border-outline-variant group-hover:border-primary'
                      }`}>
                        {isChecked && '✓'}
                      </div>
                      <span className={`text-xs uppercase tracking-wider transition-colors ${
                        isChecked ? 'text-on-surface font-semibold' : 'text-secondary group-hover:text-on-surface'
                      }`}>
                        {make}
                      </span>
                    </div>
                    <span className="text-[10px] text-secondary/60 font-mono">({count})</span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Cars Grid */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 text-xs uppercase tracking-widest text-secondary">
            <span>Showing <strong className="text-on-surface">{filteredCars.length}</strong> budget flips ready to drive away</span>
            <span className="text-primary font-bold">12-Month MOT & Mechanical Warranty</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {filteredCars.map(car => (
              <div key={car.id} className="group relative bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative overflow-hidden aspect-[16/10] bg-black">
                    <img 
                      alt={`${car.year} ${car.make} ${car.model}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src={car.image} 
                    />
                    
                    {/* Top Status Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-bold tracking-[0.2em] px-3 py-1 uppercase border border-white/10">
                        {car.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {car.tag && (
                        <div className="bg-primary text-white text-[9px] font-bold tracking-[0.2em] px-3 py-1 uppercase shadow-md">
                          {car.tag}
                        </div>
                      )}
                      <span className="bg-surface-container/90 backdrop-blur-md text-white/90 text-[9px] font-medium tracking-widest px-2.5 py-0.5 uppercase">
                        {car.condition}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-40"></div>
                  </div>

                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.3em] text-primary block mb-1 font-bold">
                          {car.year} {car.make}
                        </span>
                        <h3 className="font-serif text-2xl tracking-tight text-on-surface group-hover:text-primary transition-colors">
                          {car.model}
                        </h3>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-[9px] uppercase tracking-widest text-secondary block mb-0.5">Price</span>
                        <span className="text-2xl font-serif font-bold text-primary block">
                          {formatPrice(car.price)}
                        </span>
                      </div>
                    </div>

                    {/* Engine & Transmission preview */}
                    {car.engine && (
                      <p className="text-[11px] text-secondary line-clamp-1 mb-3 italic">
                        {car.engine} • {car.transmission}
                      </p>
                    )}

                    {/* Short Flip Repair Note */}
                    <p className="text-[12px] text-secondary/80 line-clamp-2 mb-4 leading-relaxed">
                      {car.description}
                    </p>

                    {/* Technical Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-outline-variant/10 mb-6 text-[10px] uppercase tracking-widest text-secondary">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined !text-[15px] text-primary">speed</span>
                        <span>{car.hp} HP</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined !text-[15px] text-primary">timer</span>
                        <span>{car.acceleration ? car.acceleration.replace('0-62 mph: ', '') : 'Fast'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="material-symbols-outlined !text-[15px] text-primary">distance</span>
                        <span>{formatNumber(car.miles)} MI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7">
                  <Link 
                    to={`/offer?car=${car.id}`} 
                    className="block text-center w-full py-3.5 bg-primary-container text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-red-800 active:scale-[0.98] shadow-sm"
                  >
                    View Flip Details & Make Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="py-24 text-center bg-surface-container-low border border-outline-variant/10 p-12">
              <span className="material-symbols-outlined text-5xl text-secondary mb-4 block">no_crash</span>
              <h3 className="text-xl font-headline mb-2 text-on-surface">No flips match your criteria</h3>
              <p className="text-secondary text-sm max-w-md mx-auto mb-6">
                Try loosening your filters or resetting your search to explore our full stock of budget cars.
              </p>
              <button 
                onClick={() => {
                  setSelectedMakes([]);
                  setCondition('All Inventory');
                  setActiveTab('All Models');
                  setMaxPrice(30000);
                  setSearchQuery('');
                }}
                className="px-8 py-3 bg-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-red-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {filteredCars.length > 0 && (
            <div className="mt-20 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-secondary tracking-widest uppercase">
              <span>Showing {filteredCars.length} of {INVENTORY_DATA.length} Affordable Flips</span>
              <div className="flex items-center gap-4">
                <span className="text-primary font-bold">Fixed & Ready to Drive</span>
                <span>•</span>
                <span>Part Exchange Welcome</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Inventory;
