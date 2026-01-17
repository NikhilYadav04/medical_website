import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Pill } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const ClinicInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-teal-50/30 font-sans">
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/50">
                    {/* Map / Visual Side */}
                    <div className="h-[400px] lg:h-auto bg-slate-200 relative order-2 lg:order-1">
                        {/* Embed Google Map with Coordinates */}
                        <iframe
                            src="https://maps.google.com/maps?q=Radiance+Homoeopathy+Clinic,+Ulhasnagar&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>

                        <a
                            href="https://maps.app.goo.gl/8o17s5ra5GpfXFAT7?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer block group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-50 p-3 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg group-hover:text-teal-700 transition-colors">Radiance Homoeopathy Clinic</h4>
                                    <p className="text-slate-600 text-sm">
                                        Shop no. 3, Prem Sagar Apt,<br />
                                        Near RGS School, Ulhasnagar - 421004
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Info & Call to Action Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                        <div className="inline-block self-start px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full font-semibold text-xs mb-6 uppercase tracking-wider">
                            Accepting New Patients
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Visit Our Clinic</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                            Experience comprehensive holistic care in our modern facility. We are fully equipped for diagnostics and personalized treatment plans.
                        </p>

                        {/* Clinic Address Card */}
                        <div className="mb-8 bg-teal-50 border border-teal-100 p-4 rounded-xl flex items-start gap-3">
                            <div className="bg-teal-100 p-2 rounded-lg text-teal-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-teal-900">Clinic Address</h4>
                                <p className="text-sm text-teal-800/80 mt-1">
                                    Shop no. 3, Prem Sagar Apt,
                                    Near RGS School, Ulhasnagar - 421004
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Contact Us</p>
                                    <a href="tel:+919309971261" className="text-2xl font-bold text-slate-900">+91 93099 71261</a>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-gradient-to-r from-teal-600 to-[#3BBCA0] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Calendar size={20} />
                                Book Consultation Now
                            </button>
                            <div className="bg-teal-50 rounded-xl p-4 border border-teal-100 text-center">
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Clinic Hours (Mon - Sat)</p>
                                <div className="space-y-1">
                                    <p className="text-slate-800 font-bold text-lg">10:30 AM - 1:30 PM</p>
                                    <p className="text-teal-600 font-bold text-sm">----- AND -----</p>
                                    <p className="text-slate-800 font-bold text-lg">4:30 PM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicInfo;
