import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 text-xl text-white layout-container">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="header-link flex items-center">
                        <img
                            src="icons/user.svg"
                            style={{
                                width: '50px',
                                height: 'auto'
                            }}
                            alt="Logo"
                        />
                        Profile
                    </Link>

                    <div className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `header-link block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-gray-700" : "text-white-700"} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `header-link block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-gray-700" : "text-white-700"} lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <button className="text-white hover:text-blue-800 focus:outline-none" onClick={toggleMobileMenu}>
                            {/* Hamburger Menu Icon */}
                            ☰
                        </button>

                        {/* Mobile Menu Content */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-16 left-0 w-full bg-blue-400 text-white z-40">
                                <ul className="flex flex-col mt-4 font-medium">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="block py-2 px-4 duration-200 hover:bg-white hover:text-blue-800"
                                            onClick={toggleMobileMenu}
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className="block py-2 px-4 duration-200 hover:bg-white hover:text-blue-800"
                                            onClick={toggleMobileMenu}
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
