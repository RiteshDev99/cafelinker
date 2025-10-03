import React from "react";

export default function FeatureCard({ icon, title, text }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-600">{text}</p>
        </div>
    );
}
