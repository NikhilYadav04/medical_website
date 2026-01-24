import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, CheckCircle, Activity, Calendar } from 'lucide-react';

const ConsultationModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        if (!navigator.onLine) {
            e.preventDefault();
            alert("Please check your internet connection and try again.");
            return;
        }

        setIsLoading(true);
        // We can't actually know when the iframe loads due to cross-origin policies,
        // so we fake a loading state for UX then show success.
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-slate-900/70 backdrop-blur-md"
                        />

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        {/* Modal Content container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="inline-block w-full max-w-lg my-8 text-left align-middle transition-all transform pointer-events-none"
                        >
                            <div className="bg-white pointer-events-auto rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full overflow-hidden relative border border-slate-100 flex flex-col">

                                {/* Header Gradient Area */}
                                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-teal-500 via-[#3BBCA0] to-teal-600 shadow-inner" />

                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white rounded-full p-2.5 transition-all backdrop-blur-md z-20 hover:scale-110 active:scale-95"
                                >
                                    <X size={20} strokeWidth={2.5} />
                                </button>

                                <div className="relative pt-12 px-8 pb-10">
                                    <div className="bg-white rounded-2xl shadow-xl shadow-teal-900/5 p-7 mb-8 border border-teal-50/50">
                                        <h2 className="text-3xl font-bold text-slate-800 mb-2 tracking-tight">Book Consultation</h2>
                                        <p className="text-slate-500 font-medium leading-relaxed">Fill in your details and we will get back to you shortly.</p>
                                    </div>

                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-24 h-24 bg-teal-50 text-[#3BBCA0] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
                                            >
                                                <CheckCircle size={48} strokeWidth={2.5} />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Request Sent Successfully!</h3>
                                            <p className="text-slate-600 mb-10 text-lg">Thank you for contacting us. Dr. Sonal will review your details and reach out to you within 24 hours.</p>
                                            <button
                                                onClick={onClose}
                                                className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-lg hover:shadow-slate-200"
                                            >
                                                Done
                                            </button>
                                        </div>
                                    ) : (
                                        <form
                                            action="https://docs.google.com/forms/d/e/1FAIpQLSepAcHx0dSjsA8PXwlkfmGr4H0gshq7pyjjSlslu07PRTXSPw/formResponse"
                                            target="hidden_iframe"
                                            method="POST"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-600 ml-1 uppercase tracking-wider">Patient's Name</label>
                                                <div className="relative group">
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
                                                        <User size={20} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="entry.129665509"
                                                        required
                                                        placeholder="Enter full name"
                                                        className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/50 transition-all font-semibold text-slate-700 placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-slate-600 ml-1 uppercase tracking-wider">Age</label>
                                                    <div className="relative group">
                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
                                                            <Calendar size={20} />
                                                        </div>
                                                        <input
                                                            type="number"
                                                            name="entry.219535212"
                                                            required
                                                            placeholder="Age"
                                                            className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/50 transition-all font-semibold text-slate-700 placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-slate-600 ml-1 uppercase tracking-wider">Contact Number</label>
                                                    <div className="relative group">
                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
                                                            <Phone size={20} />
                                                        </div>
                                                        <input
                                                            type="tel"
                                                            name="entry.148916053"
                                                            required
                                                            placeholder="Phone number"
                                                            className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/50 transition-all font-semibold text-slate-700 placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-600 ml-1 uppercase tracking-wider">Health Problem</label>
                                                <div className="relative group">
                                                    <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-teal-500 transition-colors">
                                                        <Activity size={20} />
                                                    </div>
                                                    <textarea
                                                        name="entry.554335982"
                                                        required
                                                        placeholder="Describe your symptoms or health concern..."
                                                        rows="4"
                                                        className="w-full bg-slate-50/80 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/50 transition-all font-semibold text-slate-700 placeholder:text-slate-400 resize-none min-h-[120px]"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-teal-600 via-[#3BBCA0] to-teal-500 text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-teal-500/40 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-6 shadow-xl shadow-teal-500/20"
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center gap-3">
                                                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Processing...
                                                    </span>
                                                ) : (
                                                    <>
                                                        Submit Request <Send size={20} strokeWidth={2.5} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hidden Iframe for Google Form Submission */}
                    <iframe
                        name="hidden_iframe"
                        id="hidden_iframe"
                        style={{ display: 'none' }}
                        title="hidden_iframe"
                    ></iframe>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
};

export default ConsultationModal;
