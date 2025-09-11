"use client";

import { NavType } from "@/sanity/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CtaButton from "./shared/CtaButton";

export default function Nav({ data }: { data: NavType }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation principale */}
      <div className="shadow-md flex items-center justify-between px-6 py-3 border border-[#E5E7EB]/50 rounded-full w-fit bg-[#F8F8F8]/80 fixed left-1/2 -translate-x-1/2 top-[50px] z-50 md:w-fit md:rounded-full max-md:w-full max-md:rounded-none max-md:top-0 max-md:left-0 max-md:translate-x-0 max-md:px-[17px]">
        {/* Logo */}
				<Link href="/"
							className="flex-shrink-0 md:w-[80px] md:h-[40px] cursor-pointer w-[55px] h-[22px]"

				>
					<Image
						src={data.logo}
						alt="logo"
						width={55}
						height={22}
						className="flex-shrink-0 md:w-[80px] md:h-[40px] cursor-pointer w-[55px] h-[22px]"
					/>
				</Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-6 mx-8">
          <Link href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            A propos
          </Link>
          <Link href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            Programme
          </Link>
          <Link href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            Testimonial
          </Link>
          <Link href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* CTA Button desktop */}
        <div className="hidden md:block">
          <CtaButton text={data.ctaButton} link={data.ctaLink} />
        </div>

        {/* Menu burger mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-6 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          {/* Bouton fermeture */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-2xl font-light text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Navigation mobile */}
          <nav className="flex flex-col space-y-6">
            <Link
              href="#"
              className="text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              A propos
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Programme
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Testimonial
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button mobile */}
          <div className="mt-8">
            <CtaButton text={data.ctaButton} link={data.ctaLink} />
          </div>
        </div>
      </div>
    </>
  );
}