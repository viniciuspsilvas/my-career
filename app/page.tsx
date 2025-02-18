"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Evita renderização antes da reidratação
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 ">
      {/* Coluna da Foto */}
      <div className="md:w-1/3 w-2/3 flex justify-center items-center">
        <div className="rounded-lg overflow-hidden shadow-[0px_0px_10px_4px_#808080]">
          
          <Image
            src="https://picsum.photos/id/237/200/500"
            alt="Vinicius Silva"
            width={224}
            height={524}
            className="w-40 h-40 md:w-56 md:h-full rounded-lg object-cover "
          />
        </div>
      </div>

      {/* Coluna do Texto */}
      <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-gray-200 text-black-200">
          I&apos;m Vinicius Silva
        </h1>
        <h2 className="text-xl md:text-2xl text-primary-600 font-semibold mt-2">
          Web Designer & Developer
        </h2>
        <p className=" mt-4 text-lg md:text-xl leading-relaxed">
          I&apos;m a web designer & front‑end developer focused on crafting clean &
          user‑friendly experiences. I am passionate about building excellent
          software that improves the lives of those around me.
        </p>
      </div>
    </div>
  );
}
