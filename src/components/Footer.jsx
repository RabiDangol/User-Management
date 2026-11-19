import { BsFacebook, BsInstagram, BsTwitch, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t border-slate-200 bg-gray-100 bottom-full">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center justify-center text-xs text-gray-700 pt-3">
            &copy; {new Date().getFullYear()} User Management System. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <BsFacebook className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <BsInstagram className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <BsTwitch className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <BsGithub className="hover:text-indigo-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
