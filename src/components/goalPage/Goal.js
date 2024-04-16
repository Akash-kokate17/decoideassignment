import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TopBar } from "../topBar/TopBar";
import { Link } from "react-router-dom";

export function Goal(props) {
  return (
    <div className="flex flex-wrap justify-between items-center w-[375px] h-[44px] md:w-full">
     <TopBar/>
      <div className=" w-full flex flex-col justify-end items-end">
        <Link to="createac"><p className="text-right text-[#9FB2FF] md:me-14">Skip</p></Link>
        <div className="border-b-2 border-[#9FB2FF] w-8 md:me-14"></div>
      </div>
      {/* img */}
      <div className="flex flex-col justify-center items-center flex-wrap w-full">
        <img
          className="w-[282px] h-[282px] top-[132px] ms-[20px] md:full"
          src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__"
          alt="imgOne"
        />
      </div>
      {/* Paragraph content */}
      <div className="flex flex-col flex-wrap justify-center items-center w-[160px] h-[24px] md:w-full  me-[193px] mt-[50px]">
        <p className="font-bold">Track Your Goal</p>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center w-[342px] h-[60px] mt-3  me-[15px] md:w-full  text-[#787878]">
        <p>
          Don’t worry if you have trouble{" "}
          <p>determining your goals, We can help you</p>{" "}
          <p>determine your goals and track your goals</p>
        </p>
      </div>
      <div className="flex flex-col flex-wrap w-full items-center mt-[80px] md:mt-[100px] ms-[250px]">
         <Link to="burn">
         <p className="border-3 rounded-full w-[60px] h-[60px] bg-[#89A1FF] m-1 flex flex-col">
            <p className="text-4xl text-white text-center mt-3 ms-3"><IoIosArrowForward /></p>
        </p>
         </Link>
      </div>
    </div>
  );
}
