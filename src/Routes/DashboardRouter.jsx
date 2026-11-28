import { Route, Routes } from "react-router-dom";
import Dashboardlayout from "../Layout/Dashboardlayout";
// import Dashboard from "../pages/Dashboard/Dashboard.jsx";
// import AllUser from "../pages/Dashboard/AllUser.jsx";
// import Dashprofile from "../pages/Dashboard/Dashprofile.jsx";

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboardlayout />}>
          {/* <Route index element={<Dashboard />}></Route>
          <Route path="users" element={<AllUser />}></Route>
          <Route path="profile" element={<Dashprofile />}></Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRouter;
