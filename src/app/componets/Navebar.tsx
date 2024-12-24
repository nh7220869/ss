"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sm:w-screen ">
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={"/logo1.png"} alt={""} width={24} height={24} />
        <div></div>
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="/areas" className="hover:text-gray-800">
            Find Link Store
          </Link>
          <Link href="/help" className="hover:text-gray-800">
            Help
          </Link>
          <Link href="/joinus" className="hover:text-gray-800">
            Join Us
          </Link>
          <Link href="/signup" className="hover:text-gray-800">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image src={"/logo2.png"} alt="Nike Logo" width={45} height={50} />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="/allproducts" className="hover:text-black whitespace-nowrap">
            New & Featured
          </Link>
          <Link href="/men" className="hover:text-black whitespace-nowrap">
            Men
          </Link>
          <Link href="/Womans" className="hover:text-black whitespace-nowrap">
            Women
          </Link>
          <Link href="/Kids" className="hover:text-black whitespace-nowrap">
            Kids
          </Link>
          <Link href="/sale" className="hover:text-black whitespace-nowrap">
            Sale
          </Link>
          <Link href="/SNKRS" className="hover:text-black whitespace-nowrap">
            SNKRS
          </Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          {/* Toggle Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-2 bg-[#fafafa] p-4 text-gray-700 font-medium text-sm md:hidden">
          <Link href="/allproducts" className="hover:text-black">
            New & Featured
          </Link>
          <Link href="/men" className="hover:text-black">
            Men
          </Link>
          <Link href="/Womans" className="hover:text-black">
            Women
          </Link>
          <Link href="/Kids" className="hover:text-black">
            Kids
          </Link>
          <Link href="/sale" className="hover:text-black">
            Sale
          </Link>
          <Link href="/SNKRS" className="hover:text-black">
            SNKRS
          </Link>
        </nav>
      )}
    </header>
  );
}
