import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault;
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch("Please fill out all fields!!");
    }
  };

  return (
    <div className="min-h-fit mt-20 mx-2">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg text-white">
              User Management
            </span>
          </Link>
          <p className="text-sm mt-5">
            You can login with your email and password or with Google..
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email">Enter Your Email</Label>
              <TextInput
                type="email"
                placeholder="Your Email"
                id="email"
                required
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password">Enter Your Password</Label>
              <TextInput
                type="password"
                placeholder="Your Password"
                id="password"
                required
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Button type="submit">Register</Button>
            </div>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
