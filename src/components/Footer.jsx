import React from 'react';
import { Stethoscope, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-teal-900/50 p-2 rounded-lg text-teal-500">
                            <Stethoscope size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-200 leading-none">
                                Radiance Homoeopathy Clinic
                            </span>
                            <span className="text-xs text-slate-500 mt-1">Ray of hope for hopeless</span>
                        </div>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="/" className="hover:text-teal-500 transition-colors">Home</a>
                        <a href="/about" className="hover:text-teal-500 transition-colors">About</a>
                        <a href="/homeopathy" className="hover:text-teal-500 transition-colors">Homeopathy</a>
                        <a href="/treatments" className="hover:text-teal-500 transition-colors">Treatments</a>
                        <a href="/contact" className="hover:text-teal-500 transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/1APrVGhR4t/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><Facebook size={24} /></a>
                        <a href="https://www.instagram.com/drsonal_radiancehomeocare?igsh=MXhwdm90NWdiZDAxYw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors"><Instagram size={24} /></a>
                        <a href="https://youtube.com/@sonalyadav1989?si=HFEGZ0Vaqq13IXz5" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors"><Youtube size={24} /></a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-900 text-center">
                    <p className="text-xs text-slate-500 max-w-4xl mx-auto mb-4 leading-relaxed">
                        Legal Disclaimer: Homeopathic treatment outcomes may vary from person to person. All treatments are provided strictly within the recognized scope of homeopathic practice, without making any claims of guaranteed cures or outcomes. The clinic adheres to professional ethics and regulatory standards at all times.
                    </p>
                    <div className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Radiance Homoeopathy Clinic. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
