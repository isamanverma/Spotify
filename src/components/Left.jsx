import React from "react";
import Footer from "./Footer";
import SongList from "./SongList";

export default function Left() {
  return (
    <div className="flex w-2/5 flex-col justify-between md:w-2/5">
      <div>
        <div className="m-1 rounded-md bg-[#1f1f1f] p-2 md:m-3">
          <ul className="border-3 bg-red flex flex-col gap-4">
            <li className="flex gap-2 rounded-lg p-2 hover:cursor-pointer md:gap-5">
              <img
                className="w-24 invert md:w-24"
                src="images/spotify.png"
                alt="logo"
              />
            </li>
            <li className="group flex items-center gap-2 rounded-lg p-2 hover:cursor-pointer md:gap-5">
              <img className="size-7 invert" src="images/home.svg" alt="home" />
              <p className="text-lg transition-all group-hover:font-bold md:text-xl">
                Home
              </p>
            </li>
            <li className="group flex items-center gap-2 rounded-lg p-2 hover:cursor-pointer md:gap-5">
              <img
                className="size-7 invert"
                src="images/search.svg"
                alt="search"
              />
              <p className="text-md transition-all group-hover:font-bold md:text-xl">
                Search
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className="m-1 rounded-md md:m-3 md:p-2">
            <div className="group flex items-center gap-2 hover:cursor-pointer md:gap-5">
              <img
                className="size-7 invert"
                src="images/playlist.svg"
                alt="playlist"
              />
              <p className="text-md text-white transition-all group-hover:font-bold md:text-xl">
                Your Library
              </p>
            </div>
          </div>
        </div>
        <SongList />
      </div>
      <Footer />
    </div>
  );
}
