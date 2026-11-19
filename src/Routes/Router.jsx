import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/layout.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
