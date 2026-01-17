import React, { useState } from 'react';
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none"
                    >
                        <div className="bg-white pointer-events-auto rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-slate-100 max-h-[90vh] overflow-y-auto">

                            {/* Header Gradient */}
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-teal-500 to-[#3BBCA0]" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-md z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative pt-10 px-8 pb-8">
                                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Book Consultation</h2>
                                    <p className="text-slate-500 text-sm">Fill in your details and we will get back to you shortly.</p>
                                </div>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Sent!</h3>
                                        <p className="text-slate-500 mb-8">Thank you for contacting us. Dr. Sonal will review your details and reach out to you.</p>
                                        <button
                                            onClick={onClose}
                                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-8 rounded-xl transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        action="https://docs.google.com/forms/d/e/1FAIpQLSepAcHx0dSjsA8PXwlkfmGr4H0gshq7pyjjSlslu07PRTXSPw/formResponse"
                                        target="hidden_iframe"
                                        method="POST"
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Patient's Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="text"
                                                    name="entry.129665509"
                                                    required
                                                    placeholder="Enter full name"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700 ml-1">Age</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="number"
                                                        name="entry.219535212"
                                                        required
                                                        placeholder="Age"
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700 ml-1">Contact Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="entry.148916053"
                                                        required
                                                        placeholder="Phone number"
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Health Problem</label>
                                            <div className="relative">
                                                <Activity className="absolute left-4 top-4 text-slate-400" size={18} />
                                                <textarea
                                                    name="entry.554335982"
                                                    required
                                                    placeholder="Describe your symptoms or health concern..."
                                                    rows="4"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-teal-600 to-[#3BBCA0] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-teal-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </span>
                                            ) : (
                                                <>
                                                    Submit Request <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Hidden Iframe for Google Form Submission */}
                    <iframe
                        name="hidden_iframe"
                        id="hidden_iframe"
                        style={{ display: 'none' }}
                        title="hidden_iframe"
                    ></iframe>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;
