"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ menuItems = [] }: { menuItems?: any[] }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className={`w-full z-20 top-0 left-0 px-3 border-b transition-all duration-300 ${
          isScrolled
            ? "fixed bg-white shadow-md border-gray-200 py-3"
            : "bg-transparent border-transparent py-3"
        }`}
      >
        <ul className="navigation mx-auto max-w-7xl flex flex-wrap justify-between items-center relative mx-auto">
          <Link href="/"><Image src="/griffin-plc.png" alt="Griffin Law, PLC" className="logo-image" width={150} height={50} priority /></Link>

          <input type="checkbox" id="check" className="hidden" />
          <div className="header-menu-sidecollapse menu [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            
            {menuItems.length === 0 && (<li className="text-red-500">Menu not found in WordPress</li>)}

            {menuItems.map((item, index) => {
              const hasChildren = item.children?.length > 0;

              if (!hasChildren) {
                return (
                  <li key={item.id}><Link href={item.uri}>{item.label}</Link></li>
                );
              }

              return (
                <li key={item.id} className="dropdown-parent">
                  <input type="checkbox" id={`sub-check-${index}`} className="hidden" />

                  <div className="flex items-center">
                    <Link href={item.uri}>{item.label}</Link>
                    <label htmlFor={`sub-check-${index}`} className="chevron-icon cursor-pointer ml-1">
                      <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </label>
                  </div>

                  <ul className="submenu-dropdown">
                    {item.children.map((child: any) => (
                      <li key={child.id}><Link href={child.uri}>{child.label}</Link></li>
                    ))}
                  </ul>
                </li>
              );
            })}

            <label htmlFor="check" className="close-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6 fill-current"><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" /></svg>
            </label>
          </div>

          <label htmlFor="check" className="open-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
          </label>
        </ul>
      </nav>
    </header>
  );
}