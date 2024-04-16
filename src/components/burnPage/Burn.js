import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { TopBar } from "../topBar/TopBar";
import { Link } from "react-router-dom";

export function Burn(props) {
  return (
    <div className="flex flex-wrap justify-between items-center w-[375px] h-[44px] md:w-full">
      <TopBar/>
      <div className=" w-full flex flex-col justify-end items-end">
        <Link to="/createac">
        <p className="text-right text-[#9FB2FF] md:me-14">Skip</p>
        </Link>
        <div className="border-b-2 border-[#9FB2FF] w-8 md:me-14"></div>
      </div>
      {/* img */}
      <div className="flex flex-col justify-center items-center flex-wrap w-full">
        <img
          className="w-[352px] h-[234px] top-[132px] ms-[11px] md:full"
          src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__ "
          alt="imgOne"
        />
      </div>
      {/* Paragraph content */}
      <div className="flex flex-col flex-wrap justify-center items-center w-[93px] h-[24px] md:w-full ms-[15px]  md:me-[240px] mt-[50px]">
        <p className="font-bold">Get Burn</p>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center w-[343px] h-[60px] mt-3 me-[16px] md:w-full text-[#787878]">
        <p>
        Let’s keep burning to achieve your goals, {" "}
          <p>it hurts only temporarily, if you give up</p>{" "}
          <p>now you will be in pain forever</p>
        </p>
      </div>
      <div className="flex flex-col flex-wrap w-full items-center mt-[80px] md:mt-[100px] ms-[250px]">
         <Link to="/createac">
         <p className="border-3 rounded-full w-[60px] h-[60px] bg-[#89A1FF] m-1 flex flex-col">
            <p className="text-4xl text-white text-center mt-3 ms-3"><IoIosArrowForward /></p>
        </p>
         </Link>
      </div>
    </div>
  );
}
