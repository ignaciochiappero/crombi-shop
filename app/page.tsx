import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="flex-grow min-h-screen">

   
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center ">
          <Image
            className="animate-pulse border border-black rounded-full p-8"
            src="/logo.png"
            alt="Next.js logo"
            width={300}
            height={300}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <p className="mb-2 text-6xl text-black">
            CROMBIE SHOP           
              
            </p>
            <p className="text-center text-black">Bienvenido a la tienda de Crombi 😀 </p>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent flex items-center justify-center bg-foreground text-black gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-all hover:animate-pulse"
              href="/tienda"
            >
              <Image
                className="bg-black rounded-full hover:animate-pulse"
                src="/logo.png"
                alt="Vercel logomark"
                width={30}
                height={30}
              />
              Ir a la tienda
            </Link>


            <Link
              className=" text-black rounded-full border border-solid border-black   flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#000000] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:animate-pulse transition-all hover:text-white"
              href="/perfil"
    
            >
              Perfil :)
            </Link>
          </div>
        </div>

      </div>

    

    </main>
  );
}
