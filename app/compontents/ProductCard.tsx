import { categories } from "@/data";
import Image from "next/image";

export default function ProductCard() {
  return ( 
    <div className="group h-80 w-64 bg-white rounded-xl p-5 text-black transition-all hover:bg-slate-400 flex flex-col items-center justify-center">
      <div className="group-hover:animate-bounce">Gorras</div>


      {
        categories.map( item => (
            
          <div key={item.id} className="overflow-hidden rounded-xl">
            <Image
              src={item.src}
              width={200}
              height={200}
              className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              alt="gorra"
            />
          </div>
        )

        )
      }
    </div>
  );
}
