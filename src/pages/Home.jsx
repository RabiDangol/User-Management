import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 min-h-screen px-4 md:px-0">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            Manage Your Users, Simply and Efficiently
          </span>
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl font-semibold">
            Welcome to Our Platform
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            A simple and organized platform to manage user accounts, view
            profiles, and keep your information up to date.
          </p>
        </div>
        <div>
          <Button
            as={Link}
            to="/register"
            color="indigo"
            className="w-full md:w-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
