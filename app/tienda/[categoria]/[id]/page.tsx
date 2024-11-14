//app\tienda\[categoria]\[id]\page.tsx

import { dataProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{id:string}>;
}) {
  const id = Number((await params).id); ;

const product = dataProducts.find((item) => item.id === id);

if (!product) {
  return <div className="mt-96 text-3xl text-red-600 font-bold animate-bounce text-center">Producto no encontrado</div>;
}

return (


  <div className="mt-28 p-2 text-black xl:px-56 flex justify-center">
    
    {/* Contenedor general */}
    <div className="flex rounded-sm overflow-hidden gap-5">
      
      {/* Contenedor imagen */}
      <div className="h-auto">
        <Image 
          src={product.image}
          width={1000}
          height={1000}
          alt={product.nombre}
          className="h-[500px] w-[500px]"            
        />
      </div>

      {/* Contenedor info texto botones */}
      <div className="flex flex-col w-96  p-2">

        <span className="text-3xl font-[family-name:var(--nasalization)]">{product.nombre}</span>
        <span className="font-[family-name:var(--din-bold)] text-xl font-bold">${product.precio}</span>


        <div className="font-[family-name:var(--din-normal)] text-md mt-5 font-light w-72 ">
          <p className="  ">{product.descripcion}</p>
        </div>



        <div className="mt-16 flex justify-center bg-black text-white  font-[family-name:var(--din-medium)] hover:bg-gray-800 transition-all rounded-sm  w-72">

          <button className="p-5 ">AGREGAR AL CARRITO</button>

        </div>

        <Link href="/tienda" className="mt-1 flex justify-center border border-black rounded-sm bg-white text-black  font-[family-name:var(--din-medium)] hover:border-gray-400 transition-all  w-72">

          <button className="p-5 ">VOLVER A LA TIENDA</button>

        </Link>
      </div>
    </div>


  </div>
);

}
