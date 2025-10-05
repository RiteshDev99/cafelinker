const CafeInformation = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 sticky ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cafe Information</h2>

            <div className="space-y-4">
                <div>
                    <p className="text-gray-600 text-sm mb-1">Business Name</p>
                    <p className="text-gray-800 font-semibold text-lg">The Digital Den</p>
                </div>

                <div>
                    <p className="text-gray-600 text-sm mb-1">Address</p>
                    <p className="text-gray-800 font-semibold">123 Main Street, Anytown, USA</p>
                </div>

                <div>
                    <p className="text-gray-600 text-sm mb-1">Contact Number</p>
                    <p className="text-gray-800 font-semibold">(555) 123-4567</p>
                </div>

                <div>
                    <p className="text-gray-600 text-sm mb-1">Email</p>
                    <p className="text-gray-800 font-semibold">info@thedigitalden.com</p>
                </div>
            </div>
        </div>
    );
};

export default CafeInformation;
