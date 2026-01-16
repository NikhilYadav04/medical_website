import React from 'react';
import ClinicInfo from '../components/ClinicInfo';

const Contact = () => {
    return (
        <div className="pt-32 font-sans">
            <div className="bg-slate-50 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
                    <p className="text-slate-500 text-lg">
                        We are here to help. Reach out to us for appointments or inquiries.
                    </p>
                </div>
            </div>
            <div className="-mt-20">
                <ClinicInfo />
            </div>
        </div>
    );
};

export default Contact;
