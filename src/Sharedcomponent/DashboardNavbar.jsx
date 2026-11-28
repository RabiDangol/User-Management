import {
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { FaChevronDown, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardNavbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Navbar
        fluid
        className="relative bg-gray-100 shadow-sm border-b border-slate-200"
      >
        <div className="w-full mx-auto px-3 py-3 flex items-center justify-around">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <FaUsers className="text-xl" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              User Management
            </span>
          </Link>
          <NavbarToggle />
          <NavbarCollapse>
            {/* <NavbarLink as={Link} to="/dashboard">
              Dashboard
            </NavbarLink>
            <NavbarLink as={Link} to="/dashboard/users">
              All Users
            </NavbarLink>
            <NavbarLink as={Link} to="/dashboard/add-users">
              Add User
            </NavbarLink> */}
            {/* profile dropdown */}
            <li>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <div className="flex items-center gap-2">
                    <Avatar
                      img={currentUser?.profilePicture}
                      rounded
                      size="sm"
                      className="border-solid border-indigo-600"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {currentUser?.username || "User"}
                    </span>
                    <FaChevronDown color="red" />
                  </div>
                }
              >
                <DropdownHeader>
                  {" "}
                  <span className="block text-sm">
                    {currentUser?.username || "User"}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {currentUser?.email}
                  </span>
                </DropdownHeader>
                <DropdownItem as={Link} to="/dashboard/profile">
                  My Profile
                </DropdownItem>
                <DropdownItem>Log-Out</DropdownItem>
              </Dropdown>
            </li>
          </NavbarCollapse>
        </div>
      </Navbar>
    </>
  );
};

export default DashboardNavbar;
