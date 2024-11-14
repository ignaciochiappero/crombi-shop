import { dataCategories } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-4 flex flex-col items-center font-[family-name:var(--font-geist-mono)] pb-20 pt-20 transition-all flex-grow  ">
      <div className="text-6xl max-sm:text-3xl pt-10 text-black">Nuestra Tienda</div>

      <div className="text-xl mt-16 text-black">Categorías</div>

      <div className="custom-grid gap-3 xl:gap-10 mt-20">
        {dataCategories.map((item) => (
          <Link
            href={item.link}          
            key={item.id}
            className={`group h-80 max-sm:w-80 sm:w-48 md:w-64 xl:w-80 border backdrop-blur bg-white rounded-lg p-5  transition-all hover:bg-black text-black hover:text-white flex flex-col items-center justify-center ${item.class} `}
          >
            <div className="group-hover:animate-bounce text-xl mb-5">{item.categoria}</div>

            <div className="overflow-hidden rounded-xl">
              <Image
                src={item.src}
                width={200}
                height={200}
                className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                alt={item.categoria}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
