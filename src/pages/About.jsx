import { Button } from "flowbite-react";
import { BsBullseye, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        {/* hero Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            About Our Platform
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Making user management simple, organized and accessible.
          </p>
        </div>
        {/* who we are section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-indigo-600">Who We Are</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A simple Way to Manage Users
          </h2>
          <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed">
            Our platform provides an organized environment where users can
            manage their profiles, access account information, and explore the
            user directory.
          </p>
        </div>
        {/* mission and vision section */}
        <div className="flex flex-col items-center justify-center md:flex-row gap-6 max-w-6xl mx-auto px-4 pb-16">
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl border border-indigo-100 bg-indigo-50/50 shadow-sm">
            <BsBullseye className="text-4xl text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <span className="text-gray-600 leading-relaxed">
              Make user management easy and efficient
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl border border-indigo-100 bg-indigo-50/50 shadow-sm">
            <BsEye className="text-4xl text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <span className="text-gray-600 leading-relaxed">
              Provide a simple and accessible platform
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center text-center py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to explore our platform?
          </h3>
          <p className="max-w-2xl text-indigo-100 text-base md:text-lg">
            Get started today and experience the simplicity of managing your
            users with ease.
          </p>
          <Button
            as={Link}
            to="/register"
            color="light"
            className="font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default About;
