//Footer.tsx

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-black footer flex justify-center items-center pb-5 font-[family-name:var(--font-geist-sans)] w-full mt-auto">
      <div className="flex items-center">
        <Image
          className="animate-pulse p-2"
          src="/logo1.png"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
        <p className="ml-2">Crombie Dev Shop ® - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
