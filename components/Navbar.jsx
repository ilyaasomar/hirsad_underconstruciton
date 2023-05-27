import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/img/main-logo.png"
                alt="Logo"
                width={120}
                height={48}
              />
            </div>
            {/* Social media icons */}
            <div className="hidden md:flex space-x-20 items-center">
              <Link href="" className="text-gray-700 text-lg  font-medium hover:text-primary ">
                Home
              </Link>
              <Link href="" className="text-gray-700 text-lg  font-medium hover:text-primary ">
                About us
              </Link>
              <Link href="" className="text-gray-700 text-lg  font-medium hover:text-primary ">
                Services
              </Link>
              <Link href="" className="text-gray-700 text-lg  font-medium hover:text-primary ">
                Portfolio
              </Link>
              <div className="px-6 py-2 bg-primary rounded-lg">
                <button className="text-white text-md font-normal text-center ">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
