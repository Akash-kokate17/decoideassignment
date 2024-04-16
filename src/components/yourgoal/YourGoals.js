import React from "react";
import { TopBar } from "../topBar/TopBar";
import { Link } from "react-router-dom";

export function YourGoals(props) {
  return <>
   <div className="flex flex-wrap flex-col items-center justify-center w-full bg-gray-100 md:bg-white">
        <div className="flex flex-wrap flex-col items-center justify-center bg-white">
          <TopBar />
          <div className="w-full flex flex-col items-center mt-5"><p className=" h-[24px] font-bold">What are your goals?</p></div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-[50px] relative rounded-[12px]">
            <p className="mt-3 ms-4 text-[#2C2B2B] font-semibold">wight Loss</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-3 relative rounded-[12px]">
            <p className="mt-3 ms-4 text-[#2C2B2B] font-semibold">Muscle Gain</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-3 relative rounded-[12px]">
            <p className="mt-3 ms-4 text-[#2C2B2B] font-semibold">Flexibility and Mobility</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-3 relative rounded-[12px]">
            <p className="mt-3 ms-4 text-[#2C2B2B] font-semibold">General Fitness</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-3 relative rounded-[12px]">
            <p className="mt-3 ms-4 tex t-[#2C2B2B] font-semibold">Event-specific training</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="flex flex-col flex-wrap bg-[#F1F1F1] w-[343px] h-[50px] mt-3 relative rounded-[12px]">
            <p className="mt-3 ms-4 text-[#2C2B2B] font-semibold">Mindfulness and Mental Health</p>
            <span className="absolute right-0 bottom-0 me-3 mb-2"><input type="checkBox" className="w-[22px] h-[22px]"/></span>
          </div>
          <div className="w-[343px] h-[50px] rounded-[12px] flex flex-col items-center mt-[80px]">
            <Link to="/workouttracker" className="w-full h-[50px]">
            <button className="text-white font-bold bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] w-full h-full rounded-[12px]">
                Confirm
            </button>
            </Link>
          </div>
        </div> 
      </div>

  </>;
}
