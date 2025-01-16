import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdAddShoppingCart } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error.message);
    })
  }
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
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
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div>{}</div>
        <button className="btn btn-outline text-[#FF3811]">Appointment</button>
        <div className="ml-2 flex items-center ">
          {user ? (
            user?.photoURL ? (
              <div className="flex justify-between items-center gap-2 ">
                <Link to={`/bookings`}><FaBasketShopping></FaBasketShopping></Link>
                <button onClick={handleLogOut} className="btn bg-[#FF3811] text-[#FFFFFF]">LogOut</button>
                <img src="" alt="" />
              </div>
            ) : (
              <div className="flex justify-between items-center gap-2">
                <Link to={`/bookings`} className="text-2xl text-[#FF3811]"><MdAddShoppingCart></MdAddShoppingCart></Link>
                <button onClick={handleLogOut} className="btn bg-[#FF3811] text-[#FFFFFF]">LogOut</button>
                <p className="w-12 h-12 p-2 text-3xl font-bold text-blue-700 rounded-full border-[2px]  border-[#FF3811] flex justify-center items-center">
                  {user?.email.charAt(0).toUpperCase()}
                </p>
              </div>
            )
          ) : (
            <div className="flex justify-between gap-2">
              <Link to={`/signin`}><button className="btn bg-[#FF3811] text-[#FFFFFF]">Signin</button></Link>
              <Link to={`/signup`}><button className="btn bg-[#FF3811] text-[#FFFFFF]">Signup</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
