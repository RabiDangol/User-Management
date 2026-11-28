import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {
  HiArrowSmRight,
  HiUser,
  HiUserGroup,
  HiViewBoards,
} from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import { useEffect, useState } from "react";

const Dashsidebar = () => {
  const location = useLocation();
  // const tab = location.pathname;
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <>
      {/* <div className="flex flex-col w-fit bg-gray-900 fixed">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/users">All Users</Link>
        <Link to="/dashboard/add-users">Add User</Link>
        <Link to="profile">My Profile</Link>
      </div> */}
      <Sidebar className="w-full shrink md:w-56">
        <SidebarItems>
          <SidebarItemGroup>
            <Link to="/dashboard">
              <SidebarItem
                active={tab === "dashboard"}
                icon={HiViewBoards}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                DashBoard
              </SidebarItem>
            </Link>
            <Link to="/dashboard?tab=users">
              <SidebarItem
                active={tab === "users"}
                icon={HiUserGroup}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                AllUser
              </SidebarItem>
            </Link>
            <Link to="/dashboard?tab=profile">
              <SidebarItem
                active={tab === "profile"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                Profile
              </SidebarItem>
            </Link>
            <SidebarItem
              icon={HiArrowSmRight}
              className="cursor-pointer"
              // onClick={handleSignout}
            >
              Sign-Out
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </>
  );
};

export default Dashsidebar;
