import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import clinicLogo from '../assets/clinic_pic.png';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Homeopathy', path: '/homeopathy' },
        { name: 'Treatments', path: '/treatments' },
        { name: 'Testimonial', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 font-sans">
            {/* Upper Header Bar */}
            <div className="bg-[#3BBCA0] text-white py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-sm font-medium relative">
                <div className="flex items-center gap-6 mb-2 sm:mb-0">
                    <div className="flex items-center gap-2">
                        <Phone size={16} fill="currentColor" className="text-white" />
                        <span>+91 93099 71261</span>
                    </div>
                </div>

                {/* New Online Consultancy Tag - Centered */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-teal-600 px-3 py-0.5 rounded-full shadow-sm">
                    <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
                    <span>Online Consultancy also Available</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Mail size={16} fill="currentColor" className="text-white" />
                        <span>radiancehomeocare@gmail.com</span>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSepAcHx0dSjsA8PXwlkfmGr4H0gshq7pyjjSlslu07PRTXSPw/viewform?usp=pp_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2A9D84] hover:bg-[#238b73] text-white px-6 py-1.5 rounded uppercase text-xs font-bold tracking-wider transition-colors border border-white/20 shadow-sm no-underline inline-block"
                    >
                        Book Consultation Now
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white shadow-sm border-b border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

                    {/* Logo Area */}
                    <NavLink to="/" className="flex items-center gap-3">
                        {clinicLogo ? (
                            <img src={clinicLogo} alt="Radiance Homoeopathy Clinic" className="h-16 w-auto object-contain" />
                        ) : (
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-slate-800 tracking-tight">RADIANCE</span>
                                <span className="text-sm text-slate-500 tracking-[0.1em] uppercase">Homoeopathy Clinic</span>
                            </div>
                        )}
                    </NavLink>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors ${isActive
                                        ? 'text-[#3BBCA0]'
                                        : 'text-slate-600 hover:text-[#3BBCA0]'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-slate-600 hover:text-teal-600 transition-colors p-2"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Side Drawer / Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-2 duration-200">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `py-3 px-4 rounded-lg text-lg font-medium transition-colors ${isActive
                                        ? 'bg-teal-50 text-[#3BBCA0]'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#3BBCA0]'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-slate-600 px-4">
                                <Phone size={18} />
                                <span>+91 93099 71261</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
