import React from "react";
import { TopBar } from "../topBar/TopBar";
import { IoIosArrowBack } from "react-icons/io";
import chart from "../../components/workouttracker/chartphoto.png";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { BottomBar } from "../bottombar/BottomBar";
import { Link } from "react-router-dom";
export function WorkoutTracker(props) {
  return (
    <>
      <div className="flex flex-wrap flex-col items-center justify-center w-full bg-gray-100 md:bg-white">
        <div className="flex flex-wrap flex-col items-center justify-center bg-white">
          <TopBar />
          <div className="flex flex-row h-[24px] items-center justify-evenly w-full font-bold mt-[35px]">
            <span className="flex items-start mr-8 p-1 bg-[#F1F1F1] rounded-[3px]">
              <IoIosArrowBack />
            </span>
            <p className="flex items-center text-center mr-20">
              Workout Tracker
            </p>
          </div>
          <div className="mt-10">
            <Link to="/schedule">
            <img src={chart} alt="chartPhoto" className="w-[343px] h-[110px]" />
            </Link>
          </div>
          <div className="flex flex-row items-center h-[50px]  rounded-[12px] mt-5 w-full" style={{ backgroundImage: 'linear-gradient(to right, #819DFF, #ffffff)' }}>
            <div className="ms-2 mr-2">
              <span className="text-xl text-blue-600">
                <BsExclamationTriangle />
              </span>
            </div>
            <div>
              <p>You've burned fewer calories than</p>
              <p>yesterday. Time to get moving!</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full mt-12">
           <div>
           <p className="text-lg font-bold">Upcoming workout</p>
           </div>
           <div>
            <p className="text-[#7F7F7F]">See more</p>
           </div>
          </div>
          <div className="flex flex-row w-full bg-white mt-3 rounded-[12px] h-[75px] items-center justify-between" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}>            <div className="flex flex-row">
                <img className="w-[50px] h-[50px]" src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2957WOw3Q5OiVh0DNJ1fAGmxdBtGK5~4unUQlH6qrq90aLJPW1DCrE~ZmCOcAWds8SXIu7Fp~adlv9sa-WryKmHNw0X8jdrOQVN3-6covoBJkx34L3plirDGT820l2EYKkWOpqEc30JkU3KV~dHP3-4OYr~AEcPrYRza4iG78N5vMKdDnA1rGL0sZxV5~3V5RVGd9mvzV7zBJCbUINhlTYMhCHTtqWUSisdT910dafzal~Me56wI7kKnJK2gMFoQIRT1a1fjreu0SkwZhrMGgBtXqGGe~B18WfM3WC-BJUwXv1yOjwKuR5S1aaDo2z9HtVvVQuglEDHfkMOeHfBA__" alt="exercise1"/>
                <div className="flex flex-col">
                    <p className="h-[15px] ms-1">Full Body Workout</p>
                    <p className="text-[#7F7F7F] text-sm ms-1 mt-3">Today 3pm</p>
                </div>
            </div>
            <div className="w-[50px] bg-[#819DFF] flex flex-row rounded-2xl me-2 relative">
                <p className="h-[21px] mt-1 text-center ms-1 text-white "><FaCircle /></p>
            </div>
          </div>
          <div className="flex flex-row w-full bg-white mt-3 rounded-[12px] h-[75px] items-center justify-between" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}>            <div className="flex flex-row">
                <img className="w-[50px] h-[50px]" src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2957WOw3Q5OiVh0DNJ1fAGmxdBtGK5~4unUQlH6qrq90aLJPW1DCrE~ZmCOcAWds8SXIu7Fp~adlv9sa-WryKmHNw0X8jdrOQVN3-6covoBJkx34L3plirDGT820l2EYKkWOpqEc30JkU3KV~dHP3-4OYr~AEcPrYRza4iG78N5vMKdDnA1rGL0sZxV5~3V5RVGd9mvzV7zBJCbUINhlTYMhCHTtqWUSisdT910dafzal~Me56wI7kKnJK2gMFoQIRT1a1fjreu0SkwZhrMGgBtXqGGe~B18WfM3WC-BJUwXv1yOjwKuR5S1aaDo2z9HtVvVQuglEDHfkMOeHfBA__" alt="exercise1"/>
                <div className="flex flex-col">
                    <p className="h-[15px] ms-1">Upper Body Workout</p>
                    <p className="text-[#7F7F7F] text-sm ms-1 mt-3">4 Feb, 3.30 pm</p>
                </div>
            </div>
            <div className="w-[50px] bg-[#819DFF] flex flex-row rounded-2xl me-2 relative">
                <p className="h-[21px] mt-1 text-center ms-1 text-white "><FaCircle /></p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <p className="font-bold">What Do You Want to Train</p>
          </div>
          <div className="w-full flex flex-row items-center justify-between flex-wrap bg-[#8CB1FF] rounded-[12px] mt-5">
           <div className="ms-6">
            <p className="text-md">Full Body Workout</p>
            <p className="text-sm">Arms</p>
            <p className="text-sm">Chest</p>
           </div>
           <div className="p-3">
            <div className="h-[100px] w-[100px] rounded-full bg-[#c6e0e9]">
            <img className="h-[100px]" src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DUnfWDBxBCh7EVxPNbDubqeRWNZ8WdDo8WW-dQlcer3wqvJ2dewWt5m2pvdrgLloWQxv8Ekm6PirETG-2KQs-Zxikr7OPSuy2w1TVU79mOWjRt2OQgnrvftYrDhTSb1-Z2XPufgpvvIjrsKv17pmeo3kb0q1-OVWJP3cwF27K9I0g5w6XwAz2olHowedMI3DJhX9oQyYs5wHzlvZypYgIOwFC0EGdRuDgcUSVFheupFT6vEK4KayiGgCN2TDfH0ZuoDBdCidY9fJuJSAcdoTPhFsMeBSseUsrtgk15HSXnWrS~pwhe6LmxHnkgcK-uAp8f~rYiowr23l24yn-lynHA__" alt="photoOfWorkout"/>
            </div>
           </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
