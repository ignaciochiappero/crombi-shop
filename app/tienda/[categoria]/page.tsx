import { dataCategories, dataProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const { categoria } = params;
  
  // Agrega este log para verificar el valor de 'categoria'
  console.log("Categoría recibida:", categoria);

  const categoriaData = dataCategories.find((item) => item.categoria === categoria);
  
  const productos = dataProducts.filter((item) => item.categoria === categoria);

  if (!categoriaData) {
    return (
      <div className="mt-96 text-3xl text-red-600 font-bold animate-bounce text-center">
        Categoría no encontrada
      </div>
    );
  }

  return (
    <div className="pt-32 flex-grow text-black text-center text-4xl items-center">
      <span className="font-[family-name:var(--font-geist-mono)]">{categoriaData.categoria}</span>
      
      <div className="max-sm:px-0 md:px-10 xl:px-32 pt-10 grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 rounded-xl overflow-hidden justify-center">
        {productos.map((item) => (


          <Link 
            href={`/tienda/${categoria}/${item.id}`} 
            key={item.id} 
            className="flex items-center justify-center group md:mb-10 xl:mb-32 ">
            <div className=" xl:w-96 max-sm:w-80 rounded-sm p-2 text-black flex-col flex">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt="product"
                  className="rounded-sm transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <span className="text-start pt-1 text-xs font-[family-name:var(--font-geist-mono)]">
                {item.nombre}
              </span>
              <span className="text-start text-sm font-bold">${item.precio}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
