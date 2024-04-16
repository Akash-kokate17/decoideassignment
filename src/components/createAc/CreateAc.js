import React from "react";
import { TopBar } from "../topBar/TopBar";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

export function CreateAc(props) {
  return (
    <>
      <div className="flex flex-wrap flex-col items-center justify-center w-full bg-gray-100 md:bg-white">
        <div className="flex flex-wrap flex-col items-center justify-center bg-white">
          <TopBar />
          <div>
            <p className="font-bold me-[200px]">Create an account</p>
          </div>
          <div className="flex flex-col flex-wrap">
            <input
              type="text"
              placeholder="First Name"
              className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-[12px] mt-[35px] p-5 outline-none hover: border-2 hover:border-blue-500 hover:cursor-pointer focus:border-2 focus:rounded-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-[12px] mt-[35px] p-5 outline-none hover: border-2 hover:border-blue-500 hover:cursor-pointer focus:border-2 focus:rounded-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-[12px] mt-[35px] p-5 outline-none hover: border-2 hover:border-blue-500 hover:cursor-pointer focus:border-2 focus:rounded-none focus:border-blue-500"
            />
            <input
              type="password   "
              placeholder="First Name"
              className="w-[343px] h-[50px] bg-[#F1F1F1] rounded-[12px] mt-[35px] p-5 outline-none hover: border-2 hover:border-blue-500 hover:cursor-pointer focus:border-2 focus:rounded-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-row items-center w-full justify-center gap-1">
            <input type="checkbox" className="w-[22px] h-[22px] mt-6" />
            <p className=" h-[21px] text-[#7F7F7F] text-[14px] mt-6">
              By Proceeding, I agree to all{" "}
              <a href="#" className="text-blue-500 border-b border-blue-500">
                T&C
              </a>
              and{" "}
              <a href="#" className="text-blue-500  border-b border-blue-500">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="mt-[50px]">
            <Link to="/yourgoals">
            <button className="w-[343px] h-[50px] rounded-[12px] bg-gradient-to-r from-[#7B91FF]  to-[#95BEFF]">
              <span className="text-[16px] text-white font-bold">
                Create an Account
              </span>
            </button>
            </Link>
          </div>
          <div className="flex flex-row gap-2 mt-5">
            <span className="w-[155px] border-b-2 text-[#7F7F7F] mb-2"></span>
            <span className="text-black-400">or</span>
            <span className="w-[155px] border-b-2 text-[#7F7F7F] mb-2"></span>
          </div>
          <div className="flex flex-row items-center w-full justify-center gap-4 mt-4">
            <p className="w-[44px] h-[44px] border-2 rounded-lg flex items-center justify-center">
              <FcGoogle className="w-[18px] h-[18px]" />
            </p>
            <p className="text-blue-600 w-[44px] h-[44px] border-2 rounded-lg flex items-center justify-center">
              <ImFacebook />
            </p>
          </div>
          <div className="mt-1">
            <Link to="/signup">
              {" "}
              <p>
                Already have an account?
                <a href="#" className="text-blue-500">
                  Login
                </a>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
