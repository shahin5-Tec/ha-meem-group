import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bg from "../../assets/bg-grad.jpg";
import logo from "../../assets/logo.png";
import "../Header/Header.css";

import {
  Bars3BottomLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" py-5 md:max-w-full lg:px-32 "
    >
      <div className="flex relative items-center  justify-between">
        {/* logo-part */}

        <Link to="/" className="flex items-center ">
          <span className="text-xl ms-2 font-bold -tracking-wide">
            <img src={logo} alt="" />
          </span>
        </Link>

        <ul className=" text-white text-sm  lg:flex md:hidden hidden items-center space-x-4 ml-8   font-semibold">
          <li>
            <NavLink to={"/"} className="hover:bg-red-700 px-2 py-1 rounded-sm">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/project"}
              className="hover:bg-red-700 px-2 py-1 rounded-sm"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skill"}
              className="hover:bg-red-700 px-2 py-1 rounded-sm"
            >
              Merchandising
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <div className="hover:bg-red-700 px-2 py-1 rounded-sm flex items-center">
                Our Industries
                <CheckIcon className=" hover: h-3 " />
              </div>
            </NavLink>
            <ul className="dropdown p-5 space-y-2">
              <li>Woven</li>
              <li>sweater</li>
              <li>Laundry</li>
              <li>Denim Mili</li>
              <li>Design and sample</li>
              <li>Ancillary</li>
            </ul>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="hover:bg-red-700 px-2 py-1 rounded-sm"
            >
              Our Customer
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " bg-red-700 px-2 py-1 rounded-sm" : ""
              }
            >
              Carrer
            </NavLink>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="hover:bg-red-700 px-2 py-1 rounded-sm"
            >
              Contact us
            </Link>
          </li>
        </ul>
        {/* mobile-navbar-section */}
        <div className="lg:hidden">
          {/* Drop-down-open-btn */}
          <button
            aria-label="open-menu"
            title="open-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomLeftIcon class="h-6 w-6 text-white bg-red-700" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0  left-0 w-full z-10">
              <div className="p-5  rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="flex items-center ">
                      <span className="text-xl  ms-2 font-bold -tracking-wide">
                        {/* <img  src={logo} alt="" /> */}
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="open-menu"
                      title="open-menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bars3BottomLeftIcon class="h-6 w-6 text-white bg-red-700" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav className="mt-8">
                  <ul className="space-y-4   font-semibold">
                    <li>
                      <NavLink
                        to={"/"}
                        className="hover:bg-red-700 px-2 py-1 rounded-sm mt-5"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/project"}
                        className="hover:bg-red-700 px-2 py-1 rounded-sm"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/skill"}
                        className="hover:bg-red-700 px-2 py-1 rounded-sm"
                      >
                        Merchandising
                      </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to={"/contact"}
                        className="hover:bg-red-700 px-2 py-1  rounded-sm "
                      >
                        Our Indusrties
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/contact"}
                        className="hover:bg-red-700 px-2 py-1 rounded-sm"
                      >
                        Our Customer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive ? "  bg-red-600 px-2 py-1 rounded-sm" : ""
                        }
                      >
                        Carrer
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to={"/contact"}
                        className="hover:bg-red-700 px-2 py-1 rounded-sm"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
