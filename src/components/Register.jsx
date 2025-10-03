import React from 'react';
import { useForm } from 'react-hook-form';
import { Coffee, ArrowRight, Info } from 'lucide-react';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
        // Handle form submission here
    };

    const steps = [
        { number: 1, label: 'Account Creation', active: true },
        { number: 2, label: 'Business Details', active: false },
        { number: 3, label: 'Services & Pricing', active: false },
        { number: 4, label: 'Review & Finish', active: false }
    ];

    return (
        <div className="min-h-screen bg-gray-50 ">
            <div className="max-w-4xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between mb-12">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mb-2 ${
                                    step.active
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white border-2 border-gray-300 text-gray-400'
                                }`}>
                                    {step.number}
                                </div>
                                <span className={`text-sm font-medium ${
                                    step.active ? 'text-gray-900' : 'text-gray-500'
                                }`}>
                  {step.label}
                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="flex-1 h-0.5 bg-gray-300 mx-4 mt-6" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Register Your Account
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Start by creating your login credentials.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="ownerName" className="block text-sm font-semibold text-gray-900 mb-2">
                                Owner Name
                            </label>
                            <input
                                id="ownerName"
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('ownerName', { required: 'Owner name is required' })}
                            />
                            {errors.ownerName && (
                                <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('phone', { required: 'Phone number is required' })}
                            />
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    }
                                })}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-900">
                                A verification link will be sent to your email address to complete the registration.
                            </p>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                            >
                                Next: Business Details
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
