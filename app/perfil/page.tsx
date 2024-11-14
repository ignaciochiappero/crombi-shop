import Image from "next/image";

export default function UserPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 pt-64 font-[family-name:var(--font-geist-mono)] text-black">

      {/* Contenedor principal */}
      <div className="border border-black flex rounded-3xl p-10 h-auto gap-5">
        


        {/* Contenedor info user */}
        <div className="flex text-sm w-52 flex-col gap-4">

          <div className="">
            <p className="border border-black rounded-lg p-2"> Categoría: </p>
          </div>


          <div className="">
            <p className="border border-black rounded-lg p-2"> Ranking: </p>
          </div>


          <div className="">
            <p className="border border-black rounded-lg p-2"> Puntos: </p>
          </div>


          <div className="">
            <p className="border border-black rounded-lg p-2"> Bonus: </p>
          </div>


          <div className="">
            <p className="border border-black rounded-lg p-2"> Compras: </p>
          </div>

        </div>


        {/* Contenedor imagen - datos */}
        <div className=" flex flex-col items-center ">
          

          <Image 
            src="/perfil-n-d.png"
            width={200}
            height={200}
            alt="perfil"
            
            className="border border-black rounded-full mb-3"
            
            /> 


          <p className="p-2 font-bold border border-black rounded-lg">Nacho Chiappero</p>

        </div>

      </div>

    </div>
      
  )
}
