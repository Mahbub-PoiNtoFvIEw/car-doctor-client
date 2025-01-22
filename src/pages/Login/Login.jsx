import React, { useState } from "react";
import img from "../../assets/images/login/login.svg";
import { FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  // const [passAuth, setPassAuth] = useState("");
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // if(password > 6){
    //   return setPassAuth("password must be")
    // }
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        form.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen mb-2">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-16">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-[.5px] border-[#E8E8E8]">
          <form onSubmit={handleLogin} className="card-body py-2">
            <h1 className="text-4xl text-center font-bold">Login !</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div
                onClick={() => setShowPass(!showPass)}
                className="text-xl text-[#737373] absolute right-2 top-12 cursor-pointer"
              >
                {!showPass ? (
                  <FaRegEye></FaRegEye>
                ) : (
                  <FaRegEyeSlash></FaRegEyeSlash>
                )}
              </div>
            </div>
            <div className="form-control mt-2">
              <input
                className="btn bg-[#FF3811] text-white"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <div className="mb-4 space-y-2 text-center">
            <p className="text-[#444444]">or Sign in with</p>
            <div className="flex justify-center items-center gap-4 ">
              <button className="rounded-full p-2 text-[#3B5998] bg-[#F5F5F8]">
                <FaFacebookF></FaFacebookF>
              </button>
              <button className="rounded-full bg-[#F5F5F8] p-2 text-[#0A66C2]">
                <FaLinkedinIn></FaLinkedinIn>
              </button>
              <button className="rounded-full bg-[#F5F5F8] p-2 text-[#0A66C2]">
                <FcGoogle></FcGoogle>
              </button>
            </div>
            <p className="pt-3 text-[#737373]">
              do not Have an account ?{" "}
              <Link to={`/signup`} className="text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
