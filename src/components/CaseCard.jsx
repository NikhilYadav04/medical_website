import React from 'react';
import { Star, Clock, CheckCircle } from 'lucide-react';

const CaseCard = ({ disease, description, solutionTime, review, rating = 5 }) => {
    return (
        <div className="min-w-[280px] md:min-w-[400px] bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{disease}</h3>
                <span className="flex items-center gap-1.5 text-teal-600 font-bold text-xs bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 uppercase tracking-wide">
                    <CheckCircle size={14} /> Solved
                </span>
            </div>

            <p className="text-slate-600 mb-8 text-base leading-relaxed">
                {description}
            </p>

            <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Clock size={16} className="text-teal-500" />
                    <span>Time to recovery: <span className="font-bold text-slate-800">{solutionTime}</span></span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-2">
                        {[...Array(rating)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                        ))}
                    </div>
                    <p className="text-slate-700 text-sm italic relative pl-4">
                        <span className="absolute left-0 top-0 text-3xl leading-none text-slate-300 font-serif">"</span>
                        {review}"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CaseCard;
