'use client';
import { useState } from 'react';

const MassTortLocations = () => {
  // 1. Setup your data array for easy scaling
  const locations = [
    {
      id: 'chandler',
      title: 'Chandler, AZ',
      address: '1120 S Dobson Rd, Suite 230 Chandler, AZ 85286',
      phone: '(480) 555-0123',
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.453472061616!2d-111.8791336!3d33.294132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b013b86022e11%3A0x6d9f8260408546b3!2s1120%20S%20Dobson%20Rd%20%23230%2C%20Chandler%2C%20AZ%2085286!5e0!3m2!1sen!2sus!4v1714380000000!5m2!1sen!2sus"
    },
    // Add more locations here in the future
  ];

  const [activeTab, setActiveTab] = useState(locations[0].id);

  return (
    <section className="location-section py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <span className="sub-title block text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">
          Locations
        </span>
        <h2 className="title text-4xl md:text-5xl font-serif text-[#1c302a] leading-tight mb-12 max-w-3xl">
          Our Best-In-Class Personal Injury Lawyers Have Proudly Served Arizona
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Location Pills (col-md-5 equivalent) */}
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-4" role="tablist">
              {locations.map((loc) => {
                const isActive = activeTab === loc.id;
                
                return (
                  <div key={loc.id} className="border-t border-gray-200 first:border-t-0">
                    <button
                      onClick={() => setActiveTab(loc.id)}
                      className={`nav-link w-full text-left py-6 transition-all duration-300 focus:outline-none group`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                    >
                      <h5 className="location-title relative flex items-center justify-between font-serif text-2xl text-[#1c302a] pr-8">
                        {loc.title}
                        
                        {/* Toggle Icons */}
                        <span className="absolute right-0">
                          {isActive ? (
                            <svg className="toggle-icon minus-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512">
                              <path fill="#1c302a" d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"></path>
                            </svg>
                          ) : (
                            <svg className="toggle-icon plus-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512">
                              <path fill="#1c302a" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
                            </svg>
                          )}
                        </span>
                      </h5>

                      {/* Expandable Address Content */}
                      <div className={`location-content overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="address-block text-gray-600 space-y-2">
                          <div className="location-address text-lg leading-relaxed max-w-[280px]">
                            {loc.address}
                          </div>
                          <div className="location-phone">
                            <a href={`tel:${loc.phone}`} className="phone-number text-[#1c302a] font-semibold hover:underline">
                              {loc.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Map Container (col-md-7 equivalent) */}
          <div className="lg:col-span-7">
            <div className="tab-content">
              {locations.map((loc) => (
                <div key={loc.id} className={`map-container transition-opacity duration-500 ${activeTab === loc.id ? 'block opacity-100' : 'hidden opacity-0'}`}>
                  <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden bg-gray-100">
                    <iframe src={loc.mapSrc} className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MassTortLocations;