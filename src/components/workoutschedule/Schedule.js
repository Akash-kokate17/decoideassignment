import React from "react";
import { TopBar } from "../topBar/TopBar";
import { IoIosArrowBack } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import {BottomBar} from "../bottombar/BottomBar";
export function Schedule(props) {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center overflow-y-auto">
          <TopBar />
          <div className="flex flex-row h-[24px] items-center justify-evenly  font-bold mt-[35px] w-[343px]">
            <span className="flex items-start mr-8 p-1 bg-[#F1F1F1] rounded-[3px]">
              <IoIosArrowBack />
            </span>
            <p className="flex items-center text-center mr-20">
              Workout Tracker
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-center">
            <span className="h-[8px] text-sm mt-1 mr-2">
              <FaAngleLeft />
            </span>{" "}
            <span className="flex flex-col items-center justify-center h-[16px] text-sm mt-2">
              Feb 2024
            </span>
            <span className="h-[8px] text-sm mt-1 ms-2">
              <FaAngleRight />
            </span>
          </div>
          <div className="flex flex-row flex-wrap w-full justify-center items-center">
            <div className="flex flex-row items-center justify-evenly w-[343px] h-[78px] mt-4">
                <div className="flex flex-col items-center">
                    <p className="text-[#7F7F7F]">Sun</p>
                    <p className="font-bold text-4xl">5</p>
                </div>
                <div className="flex flex-col items-center w-[60px] rounded-[15px] pb-4 mt-4 text-white" style={{backgroundImage:"linear-gradient(to right, #DEE5FF, #809AFF"}}>
                    <p className="text-white">Mon</p>
                    <p className="font-bold text-4xl">6</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#7F7F7F]">Tue</p>
                    <p className="font-bold text-4xl">7</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#7F7F7F]">Wed</p>
                    <p className="font-bold text-4xl">8</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#7F7F7F]">Thu</p>
                    <p className="font-bold text-4xl">9</p>
                </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
          <div className="flex flex-col">
          <p className=" font-semibold">06:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 relative">
         <div className="flex flex-row w-full">
         <p className=" font-semibold">07:00 AM</p>        
            <div className="flex flex-row items-end  z-30 absolute  top-0 right-0 me-5 mt-5">
              <p className=" rounded-2xl h-[30px] text-center px-[8px] text-white" style={{backgroundImage:"linear-gradient(to right, #D3A4F4, #E9B1E0"}}>Ab Workout, 9am</p>
            </div>           
         </div>
          </div>
          <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3 flex flex-col">
            </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">08:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 relative">
            <div className="flex flex-row ">
            <div>
              <p className=" font-semibold">09:00 AM</p>
            </div>
            <div className="flex flex-row items-center ms-24 z-0 absolute bottom-0 ">
            <p className=" rounded-2xl h-[30px] text-center px-[8px] text-white" style={{backgroundImage:"linear-gradient(to right, #D3A4F4, #E9B1E0"}}>Upperbody Workout, 3am</p>
            </div>
            </div>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3 flex flex-col z-10">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">10:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">11:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">12:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">01:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
            <div className="flex flex-row ">
            <div>
              <p className=" font-semibold">09:00 AM</p>
            </div>
            <div className="flex flex-row items-center">
            <p className=" rounded-2xl h-[28px] text-center px-[8px] bg-[#F1F1F1] ms-6 font-semibold"> Lowerbody Workout, 7:30am</p>
            </div>
            </div>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3 flex flex-col z-10">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">03:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">04:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
          <p className=" font-semibold">05:00 AM</p>
            <div className="bottom-b-2 bg-black h-[1px]  w-[375px] mt-3">
            </div>
          </div> 
          </div>
        </div>
      </div>
      <BottomBar/>
    </>
  );
}
