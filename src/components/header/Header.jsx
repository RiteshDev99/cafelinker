import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Container, Logo} from "../index.js";


function Header () {

    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug:'/',
            active: true,
        },

        {
            name: "Login",
            slug:'/login',
            active: true,

        },
        {
            name: "Sign Up",
            slug:'/signup',
            active: true,

        },
        {
            name: "Register",
            slug:'/register',
            active: true,

        },
    ]


    return (

        <header className="py-3 shadow bg-[#f7f9fc] w-full  ">
            <Container>
                <nav className="flex items-center ">
                    <div className="mr-4">
                        <Link to="/" >
                            <Logo/>
                        </Link>
                    </div>
                    <ul  className="ml-auto flex items-center space-x-2">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2  duration-200 hover:bg-[#1473d9]  hover:text-amber-50 text-[#5b626e] rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                    </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header
