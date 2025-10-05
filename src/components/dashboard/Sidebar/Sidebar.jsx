import { LayoutGrid, List, CreditCard, Users, Settings } from "lucide-react";

export default function CyberCafeSidebar({ activeItem, setActiveItem }) {
    const menuItems = [
        { name: "Dashboard", icon: LayoutGrid },
        { name: "Services", icon: List },
        { name: "Transactions", icon: CreditCard },
        { name: "Customers", icon: Users },
        { name: "Settings", icon: Settings },
    ];

    return (
        <div className="fixed top-0 left-0 w-80 h-screen bg-white shadow-lg flex flex-col z-10">
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center transform rotate-12">
                        <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">CyberCafe Manager</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center mb-4 shadow-md">
                        <div className="w-28 h-28 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <circle cx="50" cy="35" r="15" fill="#6B4423" />
                                <path d="M 30 65 Q 50 55 70 65 L 70 100 L 30 100 Z" fill="#E5E7EB" />
                                <circle cx="50" cy="35" r="12" fill="#8B6F47" />
                                <ellipse cx="45" cy="33" rx="2" ry="3" fill="#2C1810" />
                                <ellipse cx="55" cy="33" rx="2" ry="3" fill="#2C1810" />
                                <path d="M 45 40 Q 50 42 55 40" stroke="#2C1810" strokeWidth="1" fill="none" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">Alex Johnson</h2>
                    <p className="text-gray-500 text-sm">Owner</p>
                </div>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.name;

                    return (
                        <button
                            key={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className={`w-full flex items-center gap-4 px-6 py-3 rounded-xl mb-2 transition-all duration-200 ${
                                isActive
                                    ? "bg-blue-50 text-blue-600 shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span
                                className={`text-lg ${
                                    isActive ? "font-semibold" : "font-medium"
                                }`}
                            >
                {item.name}
              </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
