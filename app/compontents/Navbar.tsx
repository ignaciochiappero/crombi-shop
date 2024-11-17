import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="z-50 flex mt-5 items-center fixed ">

      <div className=' z-50 pl-5'>
        <Image
          src="/logo-bn.png"
          width={60}
          height={60}
          alt='logo-navbar'
          className=''
        
        />
      </div>

      <div className=' border text-black h-16 font-[family-name:var(--din-bold)] flex items-center p-2 gap-5 justify-center pr-10 transition-all fixed w-screen bg-white/50 backdrop-blur-sm pl-10 '>

        <Link href="/" className=" p-3 hover:text-white transition-all hover:bg-black rounded-sm">
          INICIO
        </Link>

        <Link href="/tienda" className=" p-3 hover:text-white transition-all hover:bg-black rounded-sm">
          TIENDA
        </Link>

        <Link href="/perfil" className=" p-3 hover:text-white transition-all hover:bg-black rounded-sm">
          PERFIL
        </Link>


      </div>
    </div>
  );
};

export default Navbar;
