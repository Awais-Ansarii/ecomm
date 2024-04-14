import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-400 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6  lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          {/* logo  */}
          <div className="text-center sm:text-left">
            <Image
              src="/logo.svg"
              alt=""
              width={90}
              height={100}
              className="cursor-pointer"
            />
          </div>

          <div className="mt-4 flex flex-col gap-5 lg:gap-28 sm:mt-0 sm:flex-row sm:items-center">
            <ul className="inline-flex px-5 items-center justify-center gap-5" >
              <Link
                className="text-black hover:text-blue-800 cursor-pointer text-lg font-medium"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-black hover:text-blue-800 cursor-pointer text-lg font-medium"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-black hover:text-blue-800 cursor-pointer text-lg font-medium"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-black hover:text-blue-800 cursor-pointer text-lg font-medium"
                href="/explore"
              >
                Explore
              </Link>
              <Link
                className="text-black hover:text-blue-800 cursor-pointer text-lg font-medium"
                href="/projects"
              >
                Projects
              </Link>
            </ul>

            <div className="flex items-center gap-3">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-black  transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Login
              </button>

              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-black  transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
