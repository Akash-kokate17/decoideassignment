import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { FaBatteryFull } from "react-icons/fa";

export function TopBar(props) {
  return <>
  <div className="flex flex-wrap justify-between items-center w-[375px] h-[44px] md:w-full">
        <div className="text-left ms-2">
          <p className="text-lg ms-4">9:41</p>
        </div>
        <div className="text-right gap-2 flex me-3">
          <p className="">
            <GiNetworkBars />
          </p>
          <p>
            <IoWifi />
          </p>
          <p>
            <FaBatteryFull />
          </p>
        </div>
      </div>
  </>;
}
