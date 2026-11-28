// import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DashboardNavbar from "../Sharedcomponent/DashboardNavbar.jsx";
import Dashsidebar from "../pages/Dashboard/Dashsidebar.jsx";
import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Dashprofile from "../pages/Dashboard/Dashprofile.jsx";
import AllUser from "../pages/Dashboard/AllUser.jsx";

const Dashboardlayout = () => {
  const location = useLocation();
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
      <div className="min-h-screen flex flex-col">
        <DashboardNavbar />

        <div className="flex flex-col md:flex-row flex-1">
          {/* Sidebar */}
          <aside className="w-full md:w-56 md:shrink-0">
            <Dashsidebar />
          </aside>
          <main className="flex-1 p-6 min-w-0">
            {/* <Outlet /> */}
            {tab === "dashboard" && <Dashboard />}
            {tab === "users" && <AllUser />}
            {tab === "profile" && <Dashprofile />}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboardlayout;
