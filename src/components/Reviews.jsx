import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    { name: "John Doe", text: "Dr. Smith is simply the best cardiologist in the city.", rating: 5 },
    { name: "Jane Smith", text: "Incredible attention to detail and care.", rating: 5 },
    { name: "Robert B.", text: "The clinic staff is wonderful and efficient.", rating: 5 },
    { name: "Emily White", text: "Saved my father's life. Forever grateful.", rating: 5 },
    { name: "Michael Brown", text: "Professional, knowledgeable, and kind.", rating: 5 },
    { name: "Sarah Connor", text: "I felt heard and understood for the first time.", rating: 5 },
];

const ReviewCard = ({ review }) => (
    <div className="min-w-[300px] bg-slate-800 p-6 rounded-xl mx-4 text-white hover:bg-slate-700 transition-colors">
        <div className="flex text-yellow-400 mb-3">
            {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
        </div>
        <Quote className="text-slate-500 mb-2 opacity-50" size={24} />
        <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
            "{review.text}"
        </p>
        <p className="font-bold text-teal-400 text-sm">- {review.name}</p>
    </div>
);

const Reviews = () => {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden relative">
            <div className="text-center mb-12 relative z-10 px-4">
                <h2 className="text-3xl font-bold text-white mb-2">Patient Testimonials</h2>
                <p className="text-slate-400">What our community says about their care.</p>
            </div>

            {/* Gradient masks for smooth fade effect */}
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
