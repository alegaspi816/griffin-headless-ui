import Image from 'next/image';
import Link from 'next/link';

const MassTortHeader = () => {
  return (
    <header id="header" className="w-full bg-[#1c302a] sticky top-0 z-[99] shadow-md">
      <nav className="navbar py-2 md:py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="logo-wrap flex items-center justify-between w-full flex-row gap-2">
            
            {/* Logo Section */}
            <div className="navbar-brand flex items-center">
                <Image src="/griffin-plc.png" alt="Griffin Law, PLC" className="logo-image" width={150} height={50} priority />
            </div>

            {/* CTA Button */}
            <Link 
              href="#take-the-quiz"
              className="call-button bg-[#d9f99d] text-[#1c302a] px-4 py-2 md:px-6 md:py-2.5 rounded font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-colors duration-300"
            >
              Free Consultation
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default MassTortHeader;