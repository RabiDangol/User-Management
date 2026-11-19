import { FaTachometerAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/dashboard">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/users">
          <FaUsers /> Users
        </Link>
        <Link to="/add-user">
          <FaUserPlus /> Add User
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
