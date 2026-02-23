import React from 'react'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Custom Tailoring', href: '#custom' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Visit Us', href: '#visit' },
    ]


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollPosition(true);
            } else {
                setScrollPosition(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header
            className={`fixed w-full top-0 z-50 ${scrollPosition
                ? 'bg-brand-cream/95 backdrop-blur-md py-2'
                : 'bg-transparent py-4'
                }`}
            id="navbar">
            <nav className="container mx-auto px-6">
                <div className="flex justify-between items-center">

                    <a href="#home"
                        className="font-serif text-2xl md:text-3xl font-bold text-brand-black tracking-wider hover:text-brand-gold transition-colors duration-300">
                        AL MEARAJ
                    </a>


                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-brand-charcoal hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact"
                            className="px-6 py-2 bg-brand-black text-white text-sm font-medium uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 rounded-full">
                            Contact
                        </a>
                    </div>


                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-brand-black focus:outline-none"
                        aria-label="Toggle Menu">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                </div>
                {isMobileMenuOpen && <MobileMenu navLinks={navLinks} />}
            </nav>
        </header>
    )
}

export default Navbar