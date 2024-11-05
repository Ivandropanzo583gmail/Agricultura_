
'use client';
import Link from 'next/link';  
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Our_Slogan from "./Our_Slogan";


export default function Casa(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <>
            <div className=" h-screen bg-no-repeat  bg-cover bg-center"  style={{ backgroundImage: "url('/image.png')" }}>
                <header className=" text-white ">
                    <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
                        {/* Logo */}
                        <div className="text-3xl font-bold text-white">
                        Agri<span className="text-green-500">Cultura</span>
                        </div>

                        {/* Links do menu - Desktop */}
                        <nav className="hidden lg:flex space-x-6 items-center">
                        <Link href="/" className="hover:text-green-500">Home</Link>
                        <div className="relative group">
                            <button className="hover:text-green-500">Our products</button>
                            {/* Submenu */}
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
                            <Link href="#Products" className="block px-4 py-2 hover:bg-gray-200">Product </Link>
                            <Link href="#Other" className="block px-4 py-2 hover:bg-gray-200">Other Products</Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-green-500">Benefits available to partners</button>
                            {/* Submenu */}
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
                            <Link href="#FAQ" className="block px-4 py-2 hover:bg-gray-200">FAQ</Link>
                            <Link href="#Subs" className="block px-4 py-2 hover:bg-gray-200">Subscrever</Link>
                            </div>
                        </div>
                        <Link href="#partner" className="hover:text-green-500">Partners</Link>
                        <Link href="#En" className="hover:text-green-500">EN</Link>
                        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">Become a partner</button>
                        </nav>

                        {/* Ícone do menu hambúrguer - Mobile */}
                        <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                        </div>
                    </div>

                    {/* Menu mobile */}
                    {isOpen && (
                        <div className="lg:hidden fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
                        <Link href="/" className="text-xl py-4 hover:text-green-500" onClick={toggleMenu}>Home</Link>
                        <Link href="#Products" className="text-xl py-4 hover:text-green-500" onClick={toggleMenu}>Our products</Link>
                        <Link href="#FAQ" className="text-xl py-4 hover:text-green-500" onClick={toggleMenu}>Benefits available to partners</Link>
                        <Link href="#partner" className="text-xl py-4 hover:text-green-500" onClick={toggleMenu}>Partners</Link>
                        <Link href="#En" className="text-xl py-4 hover:text-green-500" onClick={toggleMenu}>EN</Link>
                        <button className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-600" onClick={toggleMenu}>Become a partner</button>
                        </div>
                    )}
                </header>
                <Our_Slogan />
            </div>
        </>
    )
}