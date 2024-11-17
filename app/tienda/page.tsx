import { dataCategories } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-4 flex flex-col items-center font-[family-name:var(--nike)] pb-20 pt-28 transition-all flex-grow px-20 ">
      <div className="text-3xl max-sm:text-3xl pt-0 text-black">NUESTRA TIENDA</div>

      <div className="font-[family-name:var(--nasalization)] custom-grid mt-5 px-10 py-4 bg-black w-screen">
        {dataCategories.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`group relative rounded-none transition-all flex flex-col items-center justify-center ${item.class} overflow-hidden md:h-[300px]  xl:h-[480px] lg:h-[300px]`}
          >
            <div className="overflow-hidden flex items-center justify-center w-full h-full transition-all">
              <Image
                src={item.src}
                width={1000}
                height={1000}
                className="rounded-sm transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75
                group-hover:blur-sm
                "
                alt={item.categoria}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-5xl text-white/0 group-hover:text-white transition-all animate-pulse">
              <span>{item.categoria}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
