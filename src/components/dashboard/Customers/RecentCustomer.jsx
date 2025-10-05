import { useState } from "react";
import { UserPlus } from "lucide-react";

const RecentCustomers = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: "Jane Doe", duration: "2 hours", services: "Gaming, Printing" },
        { id: 2, name: "John Smith", duration: "1.5 hours", services: "Gaming" },
        { id: 3, name: "Emily White", duration: "3.5 hours", services: "Printing, Scanning" },
    ]);

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Recent Customers</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                    <UserPlus size={20} />
                    Add Customer
                </button>
            </div>

            <table className="w-full">
                <thead>
                <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Customer</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Visit Duration</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Services Used</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Actions</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-gray-800">{customer.name}</td>
                        <td className="py-4 px-4 text-gray-800">{customer.duration}</td>
                        <td className="py-4 px-4 text-gray-800">{customer.services}</td>
                        <td className="py-4 px-4">
                            <button className="text-blue-600 hover:text-blue-800 font-medium mr-4">History</button>
                            <button className="text-blue-600 hover:text-blue-800 font-medium">Send Offer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentCustomers;
