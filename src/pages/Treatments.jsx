import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Stethoscope } from 'lucide-react';

const treatmentCategories = [
    {
        id: 'autism',
        title: 'Autism',
        icon: '🧩',
        items: ['Autism Spectrum Disorder (ASD)', 'Speech & Communication Delay', 'Social Interaction Difficulty', 'Repetitive Behaviour', 'Hyperactivity & Sensory Issues']
    },
    {
        id: 'diabetes',
        title: 'Diabetes',
        icon: '🩸',
        items: ['Type-1 Diabetes (Supportive Care)', 'Type-2 Diabetes', 'Prediabetes', 'Diabetic Neuropathy', 'Diabetic Skin & Wound Issues']
    },
    {
        id: 'children',
        title: 'Children Disorders',
        icon: '🧸',
        items: ['Frequent Cold & Cough', 'Poor Immunity', 'Delayed Growth & Development', 'Bed Wetting (Nocturnal Enuresis)', 'Tonsillitis & Recurrent Infections', 'ADHD (Attention Deficit Hyperactivity Disorder)']
    },
    {
        id: 'female',
        title: 'Female Problems (Women Disorders)',
        icon: '🌸',
        items: ['Irregular Menstruation', 'Painful Periods (Dysmenorrhea)', 'PCOD / PCOS', 'Leucorrhoea (White Discharge)', 'Menopausal Complaints', 'Hormonal Imbalance', 'Infertility (Supportive Management)']
    },
    {
        id: 'skin',
        title: 'Skin Disorders',
        icon: '✨',
        items: ['Psoriasis', 'Eczema', 'Urticaria (Allergy / Hives)', 'Acne & Pimples', 'Fungal Infection (Ringworm)', 'Hyper Pigmentation / Melasma', 'Warts & Corns']
    },
    {
        id: 'kidney',
        title: 'Kidney Disorders',
        icon: '💧',
        items: ['Kidney Stones', 'Recurrent Urinary Tract Infection (UTI)', 'Burning Urination', 'Frequent Urination', 'Mild Renal Functional Complaints']
    },
    {
        id: 'hair',
        title: 'Hair Problems',
        icon: '💇‍♀️',
        items: ['Hair Fall (Alopecia)', 'Premature Greying', 'Dandruff', 'Patchy Hair Loss', 'Weak & Thin Hair']
    },

    {
        id: 'behavior',
        title: 'Behavior Disorders',
        icon: '🧠',
        items: ['Anger Issues', 'Irritability', 'Mood Swings', 'Lack of Concentration', 'Impulsive Behaviour']
    },
    {
        id: 'gastro',
        title: 'Gastrointestinal Disorders',
        icon: '🍏',
        items: ['Acidity & Gastritis', 'IBS (Irritable Bowel Syndrome)', 'Constipation', 'Chronic Diarrhoea', 'Gas & Bloating', 'Piles']
    },
    {
        id: 'mental',
        title: 'Mental Ailments / Depression',
        icon: '🧘',
        items: ['Anxiety Disorder', 'Depression', 'Insomnia (Sleep Disorder)', 'Stress-related Disorders', 'Panic Attacks', 'Phobias']
    },
    {
        id: 'autoimmune',
        title: 'Autoimmune Diseases (Supportive Care)',
        icon: '🛡️',
        items: ['Rheumatoid Arthritis', 'Psoriasis (Autoimmune Type)', 'Thyroid Autoimmune Disorders', 'Chronic Inflammatory Conditions']
    },
    {
        id: 'senior',
        title: 'Senior Citizen Disorders',
        icon: '👵',
        items: ['Joint Pain & Arthritis', 'Back Pain & Sciatica', 'Memory Issues', 'Weak Immunity', 'Sleep Problems', 'Chronic Fatigue']
    }
];

const CategoryCard = ({ category, isExpanded, toggleExpand }) => (
    <motion.div
        layout
        className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isExpanded ? 'border-teal-500 shadow-xl shadow-teal-500/10' : 'border-slate-200 shadow-sm hover:border-teal-200'}`}
    >
        <button
            onClick={() => toggleExpand(category.id)}
            className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
        >
            <div className="flex items-center gap-4">
                <span className="text-3xl filter grayscale-[0.2]">{category.icon}</span>
                <h3 className={`text-lg font-bold transition-colors ${isExpanded ? 'text-teal-700' : 'text-slate-800'}`}>
                    {category.title}
                </h3>
            </div>
            <div className={`p-2 rounded-full transition-transform duration-300 ${isExpanded ? 'bg-teal-50 rotate-180' : 'bg-slate-50'}`}>
                <ChevronDown size={20} className={isExpanded ? 'text-teal-600' : 'text-slate-400'} />
            </div>
        </button>

        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-6 pb-6 pt-0 border-t border-slate-50 mx-6 mt-2">
                        <ul className="space-y-3 pt-4">
                            {category.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-600">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                    <span className="text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const Treatments = () => {
    const [expandedIds, setExpandedIds] = useState([]);

    const toggleExpand = (id) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">

            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block p-3 bg-teal-50 rounded-2xl mb-4 text-teal-600">
                    <Stethoscope size={32} />
                </div>
                <h1 className="text-4xl font-bold text-slate-800 mb-6">Treatment Available</h1>
                <p className="text-lg text-slate-600">
                    We offer specialized homeopathic treatments for a wide range of acute and chronic conditions.
                    Click on a category below to see the specific conditions we treat.
                </p>
            </div>

            {/* Masonry-style Layout: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">

                {/* Column 1 (Left): Even Indices */}
                <div className="flex flex-col gap-6">
                    {treatmentCategories.filter((_, i) => i % 2 === 0).map((category) => {
                        const isExpanded = expandedIds.includes(category.id);
                        return (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                isExpanded={isExpanded}
                                toggleExpand={toggleExpand}
                            />
                        );
                    })}
                </div>

                {/* Column 2 (Right): Odd Indices */}
                <div className="flex flex-col gap-6">
                    {treatmentCategories.filter((_, i) => i % 2 !== 0).map((category) => {
                        const isExpanded = expandedIds.includes(category.id);
                        return (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                isExpanded={isExpanded}
                                toggleExpand={toggleExpand}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default Treatments;
