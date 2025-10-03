import React from 'react';
import { Monitor, QrCode, ShoppingCart, TrendingUp } from 'lucide-react';
import {FeatureCard} from "./index.js";

export default function CybercafeLanding() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
            <section className="bg-gradient-to-br from-slate-200 to-slate-100 py-24 px-6 min-w-[100vw]">
                <div className="text-center ">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Effortless Cybercafé Management is Here
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Simplify your operations, enhance customer experience, and boost your
                        business with our all-in-one CMS.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Get Started for Free
                        </button>
                        <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-3 rounded-full border-2 border-slate-300 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our feature-rich platform provides all the tools to streamline your
                            cybercafé's daily workflow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Monitor className="w-7 h-7 text-blue-600" />}
                            title="Service Management"
                            text="Easily add, edit, and manage your services and pricing."
                        />
                        <FeatureCard
                            icon={<QrCode className="w-7 h-7 text-blue-600" />}
                            title="QR Code Ordering"
                            text="Generate unique QR codes for customers to place orders directly."
                        />
                        <FeatureCard
                            icon={<ShoppingCart className="w-7 h-7 text-blue-600" />}
                            title="Seamless Ordering"
                            text="Customers browse, order, and upload files via a simple interface."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="w-7 h-7 text-blue-600" />}
                            title="Real-Time Job Tracking"
                            text="Monitor and manage all jobs in real-time for efficient service."
                        />
                    </div>
                </div>
            </section>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 shadow-2xl text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ready to Transform Your Cybercafé?
                            </h2>
                            <button className="bg-white hover:bg-slate-100 text-blue-600 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
                                Start Your Free Trial
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

