//app\tienda\[categoria]\[id]\page.tsx

import { dataProducts } from "@/data";
import Image from "next/image";

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
    <div className="flex border rounded-lg overflow-hidden">
      <div className="h-auto">
        <Image 
          src={product.image}
          width={1000}
          height={1000}
          alt={product.nombre}
          className="h-[500px] w-[500px]"            
        />
      </div>

      <div className="flex flex-col w-96 mt-20 p-2">
        <span className="text-3xl">{product.nombre}</span>
        <span className="text-xl font-bold">${product.precio}</span>
        <div className="text-sm mt-10 font-light">
          <p>{product.descripcion}</p>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="p-5 bg-slate-500 rounded-xl">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
);

}
