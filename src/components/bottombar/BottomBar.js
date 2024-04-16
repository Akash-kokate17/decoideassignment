import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { PiChartLineUp } from "react-icons/pi";
import { VscDeviceCamera } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
export function BottomBar(props) {
  return ( 
    <>
      <div className="w-full flex flex-col flex-wrap items-center sticky bottom-0 bg-white">
        <div className="flex w-[374px] h-[60px] flex-wrap flex-row items-center justify-evenly  bg-white z-20 ">
          <div className=" flex flex-row items-center">
            <p className="text-4xl text-[#7F7F7F]"><RiHome2Line /></p>
          </div>
          <div>
          <p className="text-4xl text-blue-300"><PiChartLineUp /></p>
          </div>
          <div className="flex flex-col items-center justify-center  relative">
            <p className="w-[63px] h-[63px] rounded-full absolute bottom-0 z-10 flex flex-col items-center justify-center"  style={{backgroundImage: "linear-gradient(to right, #DEE5FF, #809AFF)"}}>
                <span className="text-3xl text-white"><IoSearchOutline /></span>
            </p>
          </div>
          <div className="flex flex-row ">
            <p className="text-4xl text-[#7F7F7F]"><VscDeviceCamera /></p>
          </div>
          <div>
          <p className="text-4xl text-[#7F7F7F]"><IoPersonOutline /></p>
          </div>
        </div>
      </div>
    </>
  );
}
