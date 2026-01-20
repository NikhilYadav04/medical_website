import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import clinicLogo from '../assets/clinic_pic.png';
import bgImage from '../assets/bg.jpg';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen pt-52 md:pt-44 pb-12 px-4 sm:px-6 lg:px-8 flex items-center bg-gradient-to-br from-slate-100 via-slate-200 to-teal-50 overflow-hidden relative">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={bgImage} alt="" className="w-full h-full object-cover opacity-70 mix-blend-overlay" />
            </div>

            {/* Background Elements - dimming them slightly */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-200/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl z-0"></div>

            {/* Background Elements - dimming them slightly */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-200/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl z-0"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Side: Logo (Large) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-full shadow-2xl p-2 flex items-center justify-center border-4 border-slate-200">
                        {clinicLogo ? (
                            <img src={clinicLogo} alt="Radiance Homoeopathy Clinic Logo" className="w-full h-full object-contain" />
                        ) : (
                            <div className="text-center">
                                <span className="text-4xl font-bold text-teal-600">RADIANCE</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Right Side: Text & Doctor Info - Highlighted with Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 text-center md:text-left bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50"
                >
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight drop-shadow-sm leading-tight">
                            <span className="text-slate-800">RADIANCE</span> <br />
                            <span className="text-[#3BBCA0]">HOMOEOPATHY</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium tracking-wide uppercase">
                            Ray of hope for hopeless
                        </p>
                    </div>

                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#3BBCA0] to-teal-700 mx-auto md:mx-0 rounded-full shadow-sm"></div>

                    <div className="space-y-2 pt-2">
                        <div className="flex flex-col md:flex-row gap-2 items-baseline justify-center md:justify-start">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Dr. Sonal Yadav
                            </h2>
                        </div>
                        <p className="text-slate-500 font-semibold text-sm tracking-wide">
                            BHMS, CGO, DNHE, FCAH
                        </p>
                        <p className="text-slate-700 text-lg font-semibold">
                            Homeopathic Physician and Consultant
                        </p>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => navigate('/treatments')}
                            className="bg-[#3BBCA0] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-teal-500/30 hover:bg-[#2A9D84] transition-all hover:scale-105 active:scale-95 ring-offset-2 focus:ring-2 ring-teal-500"
                        >
                            Explore Treatments
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
