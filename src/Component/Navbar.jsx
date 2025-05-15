import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'light');
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`max-w-[1600px] mx-auto flex justify-between items-center px-2 md:px-16 py-2  fixed top-0 w-full z-50 shadow-lg transition-all duration-300 ${scrolled ? "bg-gray-500 shadow-md" : "bg-stone-800  bg-opacity-30"
      }`}>
      {/* Logo */}
      <div className="text-lg gap-2 flex justify-center items-center">
        <Link className="font-bold text-white" to='/'>
          <img className="md:w-36 w-28 " src="https://i.postimg.cc/Rhn1dWfV/Screenshot-2024-12-08-210839-removebg-preview.png" alt="websitelogo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div className="flex gap-4 lg:hidden items-center">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input type="checkbox" value="synthwave" onChange={toggleTheme} className="toggle theme-controller " />
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <div>
          <Link to="/myProfile" className="w-10 h-10">
            {user && user?.photoURL ? (
              <img
                className="rounded-full  object-cover w-10 h-10 border-2 border-white"
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <img
                className="rounded-full object-cover w-10 h-10 border-2 border-white"
                src="https://i.pinimg.com/736x/07/f3/88/07f388d9df8a9eff8b048d7ce60888db.jpg"
                alt="Default User"
              />
            )}
          </Link>
        </div>
        <div
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`lg:flex gap-5 ml-5 text-lg ${isMenuOpen
          ? "flex flex-col absolute top-full left-[70%] md:left-[80%] transform -translate-x-1/2 w-[50%] md:w-[30%] lg:w-auto bg-gray-700 p-4 space-y-1 z-50"
          : "hidden"
          } lg:block`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-200 hover:text-gray-600 underline underline-offset-8"
              : "text-cyan-300 hover:text-cyan-500 transition-colors duration-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/allProduct"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-200 hover:text-gray-600 underline underline-offset-8"
              : "text-cyan-300 hover:text-cyan-500 transition-colors duration-200"
          }
        >
          All Equipment
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-200 hover:text-gray-600 underline underline-offset-8"
              : "text-cyan-300 hover:text-cyan-500 transition-colors duration-200"
          }
        >
          Blogs
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-200 hover:text-gray-600 underline underline-offset-8"
              : "text-cyan-300 hover:text-cyan-500 transition-colors duration-200"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-200 hover:text-gray-600 underline underline-offset-8"
              : "text-cyan-300 hover:text-cyan-500 transition-colors duration-200"
          }
        >
          Dashboard
        </NavLink>

        <div className="flex flex-col lg:hidden items-center gap-4 mt-4">

          {user && user?.email ? (
            <button
              onClick={logOut}
              className="px-4 py-2  border-2 rounded-lg text-stone-100 hover:bg-white hover:text-[#9333EA] transition"
            >
              Log Out
            </button>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <Link
                to="/login"
                className="px-2 py-1  bg-cyan-300 rounded-lg text-stone-600 hover:bg-white hover:text-[#9333EA] transition"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-2 py-1 bg-cyan-300 rounded-lg text-stone-600 hover:bg-white hover:text-[#9333EA] transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/*  larger screens */}
      <div className="hidden lg:flex items-center gap-3 relative">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input type="checkbox" value="synthwave" onChange={toggleTheme} className="toggle theme-controller " />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/dashboard" className="w-10 h-10">
            {user && user?.photoURL ? (
              <img
                className="rounded-full transform transition-transform duration-300 hover:scale-110 object-cover w-10 h-10 border-2 border-white"
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <img
                className="rounded-full object-cover w-10 h-10 border-2 border-white"
                src="https://i.pinimg.com/736x/07/f3/88/07f388d9df8a9eff8b048d7ce60888db.jpg"
                alt="Default User"
              />
            )}
          </Link>

          {/* Tooltip for Username */}
          {isHovered && user?.displayName && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-200 text-sm w-36 shadow-lg overflow-hidden text-ellipsis whitespace-nowrap text-center">
              {user.displayName}
            </div>
          )}
        </div>

        {/* Login/Logout Button */}
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="px-4 py-2  bg-cyan-500 font-semibold rounded-lg text-stone-900 hover:bg-gray-200 hover:scale-105 hover:text-cyan-700 transition"
          >
            Log Out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="px-4 py-2 bg-cyan-500 font-semibold rounded-lg text-stone-900 hover:bg-gray-200 hover:text-cyan-700 hover:scale-105 transition"
            >
              Log In
            </Link>
            <Link
              to="/register"
                className="px-4 py-2 bg-cyan-500 font-semibold rounded-lg text-stone-900 hover:bg-gray-200 hover:text-cyan-700 hover:scale-105 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
