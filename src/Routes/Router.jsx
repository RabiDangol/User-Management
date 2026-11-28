import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import Dashboardlayout from "../Layout/Dashboardlayout.jsx";

const Router = () => {
  return (
    <>
      {/* Public route */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/*Dashboard Route*/}

        <Route path="/dashboard" element={<Dashboardlayout />}>
          {/* <Route index element={<Dashboard />}></Route>
                <Route path="users" element={<AllUser />}></Route>
                <Route path="profile" element={<Dashprofile />}></Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default Router;
