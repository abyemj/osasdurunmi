'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
//import img from 'next/img';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-orange-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and School Name */}
                <div className="flex items-center space-x-4">
                    <img src="/osas_logo.jpg" alt="School Logo" className="h-10 w-10" />
                    <h1 className="text-xl font-bold">Our Savior&apos;s Schools Durumi</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? (
                            <BarsArrowUpIcon className="h-8 w-8" />
                        ) : (
                            <BarsArrowDownIcon className="h-8 w-8" />
                        )}
                    </button>
                </div>

                {/* Menu Items */}
                <nav className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full bg-orange-800 md:bg-transparent z-10 md:z-auto md:flex-row`}>
                    <div className="md:ml-auto flex flex-col md:flex-row">
                        <Link href="/" onClick={closeMenu}>
                            <span className="block px-4 py-2 text-white no-underline hover:text-gray-300">Home</span>
                        </Link>
                        <Link href="/activities" onClick={closeMenu}>
                            <span className="block px-4 py-2 text-white no-underline hover:text-gray-300">Activities</span>
                        </Link>
                        <Link href="/gallery" onClick={closeMenu}>
                            <span className="block px-4 py-2 text-white no-underline hover:text-gray-300">Gallery</span>
                        </Link>
                        <Link href="/about" onClick={closeMenu}>
                            <span className="block px-4 py-2 text-white no-underline hover:text-gray-300">About Us</span>
                        </Link>
                        <Link href="/contact" onClick={closeMenu}>
                            <span className="block px-4 py-2 text-white no-underline hover:text-gray-300">Contact Us</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
