import { useState } from "react";
import { Plus } from "lucide-react";

const ServicesTable = () => {
    const [services, setServices] = useState([
        { id: 1, name: "Gaming", price: "$5/hour" },
        { id: 2, name: "Printing", price: "$0.10/page" },
        { id: 3, name: "Scanning", price: "$0.05/page" },
    ]);

    return (
        <div className="bg-white rounded-xl shadow-sm  mb-6 overflow-hidden">
            <div className="flex justify-between items-center  shadow py-3 p-6 ">
                <h2 className="text-2xl font-bold text-gray-800">Services</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"


                >
                    <Plus size={20} />
                    Add Service
                </button>
            </div>
          <div className='p-6'>
            <table className="w-full">
                <thead>
                <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Service</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Price</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Actions</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-800">{service.name}</td>
                        <td className="py-4 px-4 text-gray-800">{service.price}</td>
                        <td className="py-4 px-4">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
</div>
        </div>
    );
};

export default ServicesTable;
