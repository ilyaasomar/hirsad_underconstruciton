import React from "react";
import Image from "next/image";

const HeroUnderconstruction = () => {
  return (
    <section className="bg-white h-screen py-24 border-t-2">
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row w-full ">
        {/* Section 1 */}
        <section className="py-12 md:w-1/2">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-7xl md:text-9xl font-bold text-gray-800 leading-snug text-start">
                Oooops!
              </h1>
              <h3 className="text-4xl xl:text-7xl text-gray-600 mt-4 text-start leading-snug md:text-5xl">
                Under Construction.
              </h3>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center md:w-1/2">
          <div className="">
            <Image
              src="/images/construction.png"
              alt="Coding Person"
              //   className="w-full h-full"
              width={2000}
              height={1800}
            />
          </div>
          {/* Add your content here */}
        </section>
      </main>
    </section>
  );
};

export default HeroUnderconstruction;
