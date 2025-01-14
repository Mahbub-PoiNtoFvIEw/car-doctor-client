import React from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const NavBar = () => {
  const navLinks = (
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Line className="w-8 h-8 text-slate-500"></RiMenu2Line>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
