import Image from "next/image";
import React from "react";

const MainContent = () => {
  return (
    <>
      <section className="bg-third">
        <main className="container mx-auto px-4 py-8 flex w-full">
          {/* Section 1 */}
          <section className="py-12 w-1/2">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-7xl font-bold text-gray-800 leading-snug text-start">
                  Technology is always New and involving
                </h1>
                <h3 className="text-5xl text-gray-600 mt-4 text-start leading-snug">
                  We help you keep up with new technology all the time.
                </h3>
                <div className="mt-12 flex items-start">
                  <button className="bg-primary font-medium text-white px-16 py-4 rounded-lg mr-4 text-lg">
                    Contact us
                  </button>
                  <button className="bg-white text-primary font-medium border-[1.5px] border-primary px-16 py-4 rounded-lg mr-4 text-lg">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex items-center justify-center w-1/2">
            <div className="w-1/3">
              <Image
                src="/images/5809359-01.png"
                alt="Coding Person"
                // className="rounded-full"
                width={150}
                height={150}
              />
            </div>
            {/* Add your content here */}
          </section>
        </main>
      </section>
    </>
  );
};

export default MainContent;
