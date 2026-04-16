import { useEffect, useState } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setRemoved(true), 1500); // Wait for transition to finish
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0f0f0f] flex items-center justify-center pointer-events-auto transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${!visible ? '-translate-y-full' : ''
        }`}
      id="loader"
    >
      <div className="text-center">
        <h2 className="text-4xl tracking-[0.5em] font-light text-neutral-100 font-serif uppercase mb-4">
          MIHAI MOTORS
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
