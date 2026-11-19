import { FaBars, FaTimes, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      fluid
      className="relative bg-gray-100 shadow-sm border-b border-slate-200"
    >
      <div className="w-full mx-auto px-3 py-3 flex items-center justify-around">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
            <FaUsers className="text-xl" />
          </div>
          <span className="text-xl font-bold text-slate-900">
            User Management
          </span>
        </Link>
        <NavbarToggle
          onClick={() => toggleNavbar()}
          barIcon={isMenuOpen ? FaTimes : FaBars}
        />
        {/* Navigation links */}

        <NavbarCollapse
          className={`absolute top-full left-0 z-50 w-full
          bg-white shadow-lg border-t border-slate-200
          px-4 py-3
          md:static md:w-auto md:bg-transparent
          md:shadow-none md:border-0 md:p-0
          text-lg pl-2 pb-2 
          ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-3 text-sm font-bold md:flex-row md:items-center md:ml-4">
            <NavbarLink
              as={Link}
              to="/"
              onClick={() => toggleNavbar()}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold "
                  : " text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-red-600"
              }
            >
              Home
            </NavbarLink>
            <NavbarLink
              as={Link}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold "
                  : " text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-red-600"
              }
            >
              About
            </NavbarLink>
          </div>
          {/* <NavbarLink as={Link} to="/login">
            Login
          </NavbarLink>
          <NavbarLink as={Link} to="/register">
            Register
          </NavbarLink> */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:ml-4">
            <Button
              as={Link}
              to="/login"
              color="indigo"
              onClick={() => toggleNavbar()}
              className="w-full md:w-auto"
            >
              Login
            </Button>

            <Button
              as={Link}
              to="/register"
              color="indigo"
              onClick={() => toggleNavbar()}
              className="w-full md:w-auto"
            >
              Register
            </Button>
          </div>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
};

export default Header;
