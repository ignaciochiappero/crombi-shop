import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="">

      <div className='z-50  text-white h-16 font-[family-name:var(--font-geist-mono)] flex items-center p-2 gap-10 justify-end pr-10 transition-all fixed w-screen bg-slate-700/50 backdrop-blur-sm'>

        <Link href="/" className="hover:text-gray-700 transition-all">
          Inicio
        </Link>

        <Link href="/tienda" className="hover:text-gray-700 transition-all">
          Tienda
        </Link>

        <Link href="/perfil" className="hover:text-gray-700 transition-all">
          Perfil
        </Link>


      </div>
    </div>
  );
};

export default Navbar;
