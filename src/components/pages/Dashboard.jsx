import { useState } from "react";
import CyberCafeSidebar from "../dashboard/Sidebar/Sidebar.jsx";
import Dashboard from "../dashboard/index.jsx";
import ServicesTable from "../dashboard/Services/ServicesTable.jsx";
import RecentCustomers from "../dashboard/Customers/RecentCustomer.jsx";

export default function DashBoardPage() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <div className="fixed top-0 left-0 h-full">
                <CyberCafeSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            </div>

            <div className="flex-1 ml-80 flex flex-col min-h-screen">
                <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800">{activeItem}</h1>
                </div>

                <div className="flex-1 p-8 overflow-y-auto">
                    {activeItem === "Dashboard" && <Dashboard />}

                    {activeItem === "Services" && (
                        <div className="">
                            <ServicesTable/>
                        </div>
                    )}

                    {activeItem === "Transactions" && (
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Transactions Page</h2>
                            <p className="text-gray-600 mt-2">Transactions content goes here</p>
                        </div>
                    )}

                    {activeItem === "Customers" && (
                        <div className="">
                           <RecentCustomers/>
                        </div>
                    )}

                    {activeItem === "Settings" && (
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Settings Page</h2>
                            <p className="text-gray-600 mt-2">Settings content goes here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
