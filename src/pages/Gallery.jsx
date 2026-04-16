import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const GALLERY_DATA = [
  {
    id: 1,
    tag: 'Restoration',
    title: '1974 Carrera RS',
    size: 'large', // to simulate different sizes if we want, but letting masonry handle it
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpWpwS1VxzY4W3WbGgs0JX0kzi4zQpFJuPJM1X1kKin41n6Y9zGgGzrV-bZRbg8sIlwueBANKO_K7lOaZDXidhU5qTjET480gCGBN3iL6aBKLJkh9gqWcMMEn8A_Ogs_BREEzbXvbfKn5ducTAJc-E056_nRhdzs3JivzkMaMCBzgHd78mQqaHUWPxxRDDcYQ2K3u4xlOFHGzxrOdwvOKHC-l65XqjYWIjioZEzP8IfG1sq4O94mHf6H7i3-i4zSkdNFWSDlKcZo'
  },
  {
    id: 2,
    tag: 'Performance',
    title: 'Aero-Carbon Kit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqQauD18DK7yH1qQP2v1oTe1f65IRzsl-fpkuCpPg03XfE9dwuO96mozREc3pHUm_YSYa4wUvJCcIh5Wb4A5B2jiP1qaVQT3dWq2X-vUEy861EZdHsdoKC-kVfHR3y5gNU7dcyBow5iFqVihgv_EQasVWtYDLO2x78nGxu0udnotNHTQDRT5_997sZiKRUDU88g9D1gYrkLFaVLBVCkY7Ribkj7vLJOFsl5LwAQ88zBFWEGBYk4uOBDTcwyhvJLe0vv7kZrToUSKs'
  },
  {
    id: 3,
    tag: 'Sales',
    title: 'LaFerrari 2015',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLUJ70H6Hx6vN__AnY8r7i0L_hshz0BolvjY9OClWFw3-T_x2v3DgGr2tDiCq32ODAYWDoJ503oA2B2thFG67lzVrvqUaBrHFFfBFKY8BRMz9gN28On-GlOTbawrorm_FiLdaSSUdLgiUaJa-4cmNWZf192WHGZpYPPZBzasPYCxvICaoFIALlUWsmrpmso5thtpTK9tFoy5DJhwCId-RHdVwrwCus2v0MLUgtizz8W1G9DjQNRyO59v0m1RsULG7NnVSN3Uu4n-I'
  },
  {
    id: 4,
    tag: 'The Studio',
    title: 'Main Service Bay',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs9RvDVSai_YpoxeDeq3aYPpK4a89xgpwzpHRbnkd_5qfqJiOo_RKKlQpe6bAF0T0Qixbu-agEVXuSlZKr1cA8k_GXvfY33eXg2zwlZI6B5gpm73ashcnvyWu_V99Duo0ldgdfP7Bs8ODvyLKJks73dMVESGqTZ7SS4KyWm-gjpkMkmaGYXpjXPOQ3ejvJYJ7vHfL3O19kE7-bcqUpRa0Cl4IEzVopopn18mNoR75SU765kKoLSodb6Ehr5fcC8hD4VtMeoNqugsI'
  },
  {
    id: 5,
    tag: 'Tuning',
    title: 'V12 Blueprinting',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ReaN0B0zr91mBH32yCLOVK19FbdhKBMga35BgZ2UCmQ3hECtfFbbd5uDmRpVW4QDDOqlDa-fGuBOSBkj_we1ybv0ZYPrI9L1O4QBRmxtOGKdOHSR4KB5LZPfoqp52SypMeLIKm7-NpP59rgS84d3qEWigcML2E8IAb_T-MD33NvJqNjgrJTX63nKeL9W7p83d9yWCRB87u68U26WRDotk0aHHwaXkzJqjwEJrAj_kzbOy7LuhFyEx9-7wLQXkWK4TbLHnQFh9Qg'
  },
  {
    id: 6,
    tag: 'Preservation',
    title: 'BMW 3.0 CSL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGicgstNH5poBqVyTtx6NRohjyG7YSyUmrO7W3MJ-ZNKAXR6dpHB56UpjRVB02FN2xUOF0mxvgusi5aSKSqEtDTXsXPOfp7f8kH_zdaONkWOuRkvkVjsu-5or-KAb7JFa--x9rgMBKZdy4aPQzVLzlUTqtYtqdGfSRDen8fqjF9Ff1upoBVb9wpSFI2KLaX3Cy_fTAtSg0Jpm6Ypcxs0we-yAfTQSsU6ZZu7uVDdZGsg9X0AzkHrAeYGSziHwLwL9yADooYKge4Jc'
  }
];

const Gallery = () => {
  return (
    <>
      <PageBanner title="Gallery" currentPath="Gallery" />
      <div className="mb-16 px-12 max-w-screen-2xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[1.1] mb-4">
               The <span className="text-primary italic">Obsidian</span> Gallery
            </h1>
            <p className="text-secondary max-w-md leading-relaxed text-sm tracking-wide">
               A curated showcase of precision engineering, automotive restoration, and exotic acquisitions. Witness the transition from raw metal to rolling masterpiece.
            </p>
          </div>
          <div className="flex md:justify-end gap-12">
            <div className="text-center">
              <div className="text-4xl font-headline text-on-surface">450+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-secondary mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline text-on-surface">12</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-secondary mt-1">Awards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap gap-x-12 gap-y-4 mb-12 border-b border-outline-variant/15 pb-8">
          <button className="text-xs tracking-[0.25em] uppercase text-on-surface border-b border-primary pb-1">All Works</button>
          <button className="text-xs tracking-[0.25em] uppercase text-secondary hover:text-on-surface transition-colors">Restorations</button>
          <button className="text-xs tracking-[0.25em] uppercase text-secondary hover:text-on-surface transition-colors">Exotic Sales</button>
          <button className="text-xs tracking-[0.25em] uppercase text-secondary hover:text-on-surface transition-colors">Custom Paint</button>
          <button className="text-xs tracking-[0.25em] uppercase text-secondary hover:text-on-surface transition-colors">Performance Tuning</button>
        </div>

        <div className="masonry-grid">
          {GALLERY_DATA.map(item => (
            <div key={item.id} className="masonry-item group cursor-pointer">
              <div className="relative overflow-hidden bg-surface-container">
                <img className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src={item.image} alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] tracking-[0.2em] text-primary uppercase mb-2">{item.tag}</span>
                  <h3 className="text-2xl font-headline font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <button className="group flex flex-col items-center gap-4">
            <span className="text-xs tracking-[0.4em] uppercase text-secondary group-hover:text-primary transition-colors">Explore More</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
