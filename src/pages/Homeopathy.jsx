import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carousel1 from '../assets/carousel_1.jpg';
import carousel2 from '../assets/carousel_2.jpg';
import carousel3 from '../assets/carousel_3.jpg';

const Homeopathy = () => {
    // Carousel Images - Updated to use local assets as requested
    const images = [
        carousel1,
        carousel2,
        carousel3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen pt-52 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative">

            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                <h1 className="text-4xl font-bold text-slate-800 mb-6 drop-shadow-sm">About Homoeopathy</h1>
                <p className="text-xl text-teal-600 font-medium italic">
                    "Homoeopathy is a holistic system of medicine that focuses on the individual as a whole rather than only on the disease."
                </p>
            </div>

            {/* Carousel Section */}
            <div className="group w-full max-w-5xl mx-auto h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 relative bg-slate-100 border-4 border-white/50">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Homeopathy"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-90"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-90"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicators dots with active state animation */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className="relative w-12 h-1.5 rounded-full overflow-hidden bg-white/30"
                        >
                            {idx === currentIndex && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute inset-0 bg-white"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto space-y-8 text-slate-700 leading-loose text-lg text-justify">
                <p>
                    <span className="font-bold text-teal-700 text-xl block mb-2">Individualized Approach</span>
                    Homoeopathy emphasizes understanding the patient’s physical symptoms, mental state, emotional well-being, and lifestyle before planning treatment.
                    One of the key strengths of homoeopathy is its individualized approach. Each patient is assessed in detail, and treatment is tailored according to their unique health profile.
                    This makes homoeopathy suitable for people of all age groups, including children and the elderly.
                </p>

                <p>
                    <span className="font-bold text-teal-700 text-xl block mb-2">Safe & Effective</span>
                    Homoeopathic medicines are prepared in regulated doses and are generally well-tolerated when prescribed by a qualified practitioner.
                    The system places importance on long-term health support, preventive care, and overall well-being.
                </p>

                <p>
                    <span className="font-bold text-teal-700 text-xl block mb-2">Complementary Care</span>
                    Homoeopathy is widely used as a supportive and complementary form of care in managing various acute and chronic health conditions.
                    It can be taken alongside conventional medical treatment under proper medical guidance.
                </p>

                <div className="bg-teal-50 p-8 rounded-2xl border-l-4 border-teal-500 my-8">
                    <p className="font-medium text-teal-800">
                        Recognized by the Ministry of AYUSH, Government of India, homoeopathy encourages ethical practice, patient education, and realistic treatment expectations.
                        The aim is to support the body’s natural healing response and improve quality of life.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Homeopathy;
