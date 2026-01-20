import React from 'react';
import doctorSonal from '../assets/doctor_pic.jpeg';

const About = () => {
    return (
        <div className="min-h-screen pt-52 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">

            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-slate-800 mb-6">About Us</h1>
                <p className="text-lg text-teal-600 font-medium leading-relaxed">
                    Radiance Homoeopathy Clinic is a ray of hope for the hopeless, offering holistic solutions for all your health needs.
                </p>
                <p className="text-slate-600 mt-4 leading-relaxed">
                    We continuously keep pace with the latest advancements, research, and developments in homeopathic medicine.
                    With changing lifestyles and increasing stress-related disorders, we believe in providing accurate, individualized,
                    and refined treatment plans tailored to each patient’s physical, mental, and emotional needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16 items-center">
                {/* Doctor Image */}
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-md aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl mb-6 border-4 border-slate-100">
                        <img
                            src={doctorSonal}
                            alt="Dr. Sonal Yadav"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Doctor Info */}
                <div className="text-left space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800">Dr. Sonal Yadav</h2>
                        <p className="text-[#3BBCA0] font-bold text-lg">Founder & Homeopathic Physician</p>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                        Dr. Sonal Yadav is a dedicated and compassionate homeopathic physician, known for her patient-centric approach and commitment to holistic healing.
                        With over <span className="font-semibold text-slate-800">10 years of experience</span> in the field of homeopathy, she has gained expertise in managing a wide range of acute and chronic diseases.
                    </p>

                    <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h3 className="font-bold text-teal-800 mb-3">Areas of Special Interest</h3>
                        <p className="text-slate-700">
                            Lifestyle disorders, skin problems, female health issues, pediatric complaints, allergies, and chronic illnesses.
                        </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                        Her treatment approach focuses on identifying the root cause of the disease rather than merely suppressing symptoms, emphasizing a detailed case evaluation and holistic understanding of the patient.
                    </p>
                </div>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 text-center max-w-5xl mx-auto space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Our Philosophy</h3>
                    <p className="text-slate-700 leading-relaxed">
                        "The goal is not only to treat illness but also to empower patients to achieve long-term wellness and a better quality of life."
                    </p>
                </div>

                <div className="text-slate-600 text-left space-y-4 pt-4 border-t border-blue-200/50">
                    <p>
                        Along with clinical practice, Dr. Sonal Yadav actively participates in health awareness programs, patient education initiatives, and preventive healthcare guidance.
                        She is committed to providing ethical, evidence-based, and individualized homeopathic care in accordance with the guidelines laid down by the <span className="font-semibold">Ministry of AYUSH, Government of India</span>.
                    </p>
                    <p>
                        We believe in patient education, preventive care, and long-term health management, ensuring every patient receives adequate guidance regarding treatment scope, limitations, and the importance of regular follow-ups.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;
