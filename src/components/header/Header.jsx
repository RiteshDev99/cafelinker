import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Logo } from "../index.js";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: "Home", slug: "/" },
        { name: "Contact", slug: "" },
        { name: "Login", slug: "/login" },
        // { name: "Register", slug: "/register" },

    ];

    return (
        <header className="py-4 shadow bg-[#f7f9fc] w-full sticky top-0 z-50">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 ">
                        <Logo />
                    </Link>
                    <ul className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.slug;
                            return (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className={`px-5 py-2 rounded-full font-medium transition-all ${
                                            isActive
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "text-[#5b626e] hover:bg-blue-100 hover:text-blue-600"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="md:hidden">
                        <button className="p-2 rounded-md hover:bg-blue-100">
                            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-700"></span>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
