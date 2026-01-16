import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import CaseCard from './CaseCard';

const cases = [
    {
        disease: "Hypertension Control",
        description: "Patient presented with severe high blood pressure resistant to medication. Implemented a lifestyle + optimized medication protocol.",
        solutionTime: "3 Months",
        review: "Finally found a doctor who listened. My BP is normal for the first time in years!",
        rating: 5
    },
    {
        disease: "Arrhythmia Managment",
        description: "Diagnosed irregular heartbeat causing fatigue. Successfully treated with ablation therapy referral and ongoing monitoring.",
        solutionTime: "6 Weeks",
        review: "I have my energy back. Dr. Smith is incredibly thorough.",
        rating: 5
    },
    {
        disease: "Preventative Cardiology",
        description: "High genetic risk factor assessment and preventative diet/exercise plan for a 45-year-old male.",
        solutionTime: "Ongoing",
        review: "Great roadmap for my health. I feel much more confident about my future.",
        rating: 5
    },
    {
        disease: "Post-Heart Attack Care",
        description: "Comprehensive recovery plan including cardiac rehab coordination and medication management.",
        solutionTime: "6 Months",
        review: "Saved my life and guided me through a scary recovery. Forever grateful.",
        rating: 5
    }
];

const CasesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-end justify-between relative z-10">
                <div>
                    <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Real Results</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-3">Patient Success Stories</h2>
                    <p className="text-slate-600 max-w-xl text-lg">See how we've helped patients overcome complex cardiac conditions through personalized care plans.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="hidden sm:flex items-center gap-2 text-teal-700 font-bold hover:text-teal-900 transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100"
                >
                    View All Cases <ArrowRight size={20} />
                </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-8 hide-scrollbar px-4 sm:px-6 lg:px-8">
                <div className="flex gap-8 w-max px-4">
                    {cases.map((c, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="max-w-[400px]" // Fixed width constraint
                        >
                            <CaseCard {...c} />
                        </motion.div>
                    ))}
                    <div className="min-w-[200px] flex items-center justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex flex-col items-center gap-2 text-slate-400 hover:text-teal-600 transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-full border-2 border-slate-200 group-hover:border-teal-500 flex items-center justify-center bg-white shadow-sm">
                                <ArrowRight size={24} />
                            </div>
                            <span className="font-medium">View All</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* View All Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="text-2xl font-bold text-slate-900">All Success Stories</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50">
                                {cases.map((c, index) => (
                                    <CaseCard key={index} {...c} />
                                ))}
                                {cases.map((c, index) => (
                                    <CaseCard key={`dup-${index}`} {...c} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CasesSection;
