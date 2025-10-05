import React from 'react';
import { Share2 } from 'lucide-react';

export default function QRCode() {
    const handleShare = () => {
        console.log('Share button clicked');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm  sticky ">
            <div className="bg-white rounded-2xl shadow-lg p-4 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    Share My Cafe Page
                </h1>

                <p className="text-gray-500 text-center mb-8">
                    Share your cafe's page with customers via QR code.
                </p>

                <div className="flex justify-center mb-4">
                    <div className="bg-teal-800 p-4 rounded-lg shadow-md">
                        <div className="bg-white p-3 rounded">
                            <img
                                src="https://qrexplore.com/icon/apple-icon.png"
                                alt="QR Code"
                                className="w-28 h-28 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleShare}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md"
                >
                    <Share2 size={24} />
                    <span className="text-lg">Share Page</span>
                </button>
            </div>
        </div>
    );
}
