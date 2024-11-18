"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-40 fixed w-full">
      <div className="flex items-center border justify-between bg-white/50 backdrop-blur-sm h-16">
        {/* Logo */}
        <div className="z-30 pl-5">
          <Image src="/logo-bn.png" width={30} height={30} alt="logo-navbar" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 pr-10 font-[family-name:var(--din-bold)] text-black">
          <Link href="/" className="p-3 hover:text-white transition-all hover:bg-black rounded-sm">
            INICIO
          </Link>
          <Link href="/tienda" className="p-3 hover:text-white transition-all hover:bg-black rounded-sm">
            TIENDA
          </Link>
          <Link href="/perfil" className="p-3 hover:text-white transition-all hover:bg-black rounded-sm">
            PERFIL
          </Link>
        </div>

        <button 
          onClick={toggleMenu}
          className="md:hidden p-4 z-50 text-black"
        >
           <Menu size={24} />
        </button>




      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
                {/* Mobile Menu Button */}
        
        <div className='flex justify-end'>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-4 z-50 text-black "
          >
            <X size={24} /> 
          </button>
        </div>


        <div className=" flex flex-col items-center justify-start mt-48 h-full gap-8 font-[family-name:var(--din-bold)] text-black ">
          <Link 
            href="/" 
            className="p-3 hover:text-white transition-all hover:bg-black rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </Link>
          <Link 
            href="/tienda" 
            className="p-3 hover:text-white transition-all hover:bg-black rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            TIENDA
          </Link>
          <Link 
            href="/perfil" 
            className="p-3 hover:text-white transition-all hover:bg-black rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            PERFIL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;