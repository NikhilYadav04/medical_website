
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Karan BK",
        text: "Dr sonal is very hard working and understand the patients problems and guides the patients through counselling and ofcourse the prescribed medicines. Intially the medicines slowly slowly gives the results but definitely the patients gets relief after a certain period but yes dr sonal medicines gives result.I highly recommend to take the treatments and have a trust on her becoz trust and belief in homeopathy will only give results at a longer period.",
        rating: 5
    },
    {
        name: "Pradeep Yadav",
        text: "What I feel that benefit of homeopathic treatment is its personalized approach, focusing on treating the individual as a whole rather than just the disease or symptoms. ... As far as my experience with Dr. Sonal Yadav is concerned, I want to express my heartfelt gratitude for the exceptional care and attention she provided during the recent treatment at Radiance.",
        rating: 5
    },
    {
        name: "Vishal Raut",
        text: "Its my honest n genuine review ... Before consulting mam ..im going thro lot of stress and anxiety /depression/ overthinking ... when i talked her she listen n understands my problem and prescribed some medicine ... within a week i see results .. Positivity increases becoz of low over thinking... honestly it works ..n also she take weekly updates...so if anybody is going thro issues like me...consult her..she is best for this.",
        rating: 5
    },
    {
        name: "Sarika Salunkhe",
        text: "मुझे तो बोहोत अच्छा रिझल्ट मिला है! बोहोत सारी तकलीफ थी बोहोत रिलीफ मिला है! Migrane की pain से परेशान थी! Week मे २ दीन pain रहाता था! उसे आराम मिला..अभी १या २ महिने में हल्का पेन होता है! Back pain होता था.. वो complet बंद हो गया! Emotionally बोहोत weak थी. काफी हत तक वो भी कम हुआ हैं! ... Thank you so much Dr.Sonal.. god bless you ❤️",
        rating: 5
    },
    {
        name: "Utkarsh Kumar",
        text: "Dr Sonal yadav is one of the best doctor. Her expertise, patience, and positive approach have made a significant difference in my health. I received the one of the best treatment. I truly appreciate your dedication and the positive attitude. Thanks 😊 ...",
        rating: 5
    },
    {
        name: "Himanshu Maurya",
        text: "I have been suffering from chronic eczema for more than 10 years... Dr. Sonal N. Yadav was very friendly and attentive. She took a detailed case history... To my surprise, my eczema started to heal gradually... My skin became smoother and less itchy... She is truly one of the best homeopaths I have seen.",
        rating: 5
    },
    {
        name: "Santosh kumar Chaubey",
        text: "Dr. Sonal is the best for me and my family. I had back pain and even I can't walk. But now I am working in Russia, Gulf because of her guidance and medicine. Now a days I am fully Fit. Thank you Dr. Sonal 🙏 I am highly recommend to Dr.",
        rating: 5
    },
    {
        name: "Neha Khotele",
        text: "I had an exceptional experience with Dr. Sonal! From the initial consultation to the follow-up appointments, Dr. Sonal showed utmost care, professionalism, and expertise... The treatment plan was tailored to my specific needs, and the results were outstanding. Thank you, Dr. Sonal, for your dedication and compassion!",
        rating: 5
    },
    {
        name: "Rajeev Maurya",
        text: "Dr. Sonal Yadav is devoted to spread her knowledge in homoeopathic medical science and has acute sense of medical analysis. She has added experience and boosted her abilities in meeting the ever growing health care requirements.",
        rating: 5
    },
    {
        name: "Arti Yadav",
        text: "I have been suffering from chronic migraines for over 10 years and I have tried various treatments... I decided to give homeopathy a try after reading some positive reviews online and I am very happy I did.",
        rating: 5
    },
    {
        name: "MAHENDRA KUMAR",
        text: "Dr. Sonal yadav is an exceptional homeopathic doctor who I highly recommend. From my personal experience, I can attest to their expertise and dedication to patient care... I have found the treatment prescribed by Dr sonal yadav to be highly effective, providing me with long lasting relief from my elements... I wholeheartedly recommend Dr sonal yadav.",
        rating: 5
    },
    {
        name: "virendra kumar Yadav",
        text: "मै अपने मुंह के अल्सर से बहुत परेशान था . अंग्रेजी medicine कई जगह से कराया पर आराम होता था लेकिन कुछ दिन बाद फिर से शुरू हो जाता था. अभी जब से मैंने दवा यहां से शुरू किया है मुझे बहुत आराम हैं. (I was very troubled by my mouth ulcers... Ever since I started the medicine here, I am very relieved.)",
        rating: 5
    },
    {
        name: "sandesh kumar",
        text: "All Health Related problems solving under one roof. Dr Sonal Madam is a most knowledgeable, highly experienced Homeopath doctor . her approach is so gentle and she captures very strongly the root cause of any disease. Thank you doctor Sonal madam for providing a best homeopathy centre in ulhasnagar area.",
        rating: 5
    },
    {
        name: "prem prakash yadav",
        text: "As my per experience with Radiance Homeopathy will always recommended everyone that Dr Sonal Yadav is undoubtedly the best homeopath Doctor of all over Kalyan Ulhasnagar and ambernath area... Reason behind this is that there is not a single homeopath Doctor who practice on mind method homeopathy solely...",
        rating: 5
    }
];

const ReviewCard = ({ review }) => (
    <div className="min-w-[450px] md:min-w-[500px] bg-white/10 backdrop-blur-md p-10 rounded-3xl mx-6 text-slate-800 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-3xl -z-10"></div>
        <div className="absolute top-0 right-0 p-6 opacity-10">
            <Quote size={64} className="text-teal-600" />
        </div>

        <div className="flex text-[#FFD700] mb-6 drop-shadow-sm">
            {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" stroke="none" />
            ))}
        </div>

        <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium italic">
            "{review.text}"
        </p>

        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                {review.name.charAt(0)}
            </div>
            <div>
                <p className="font-bold text-slate-800 text-base">{review.name}</p>
                <p className="text-teal-600 text-xs font-semibold uppercase tracking-wider">Verified Patient</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div className="min-h-screen pt-40 pb-10 overflow-hidden font-sans bg-slate-50 relative flex flex-col justify-center">
            {/* Background decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Patient Stories</h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Real experiences from our patients who have found healing and hope at Harmony Homeocare.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative py-4">
                {/* Gradient masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex py-10 items-center"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
