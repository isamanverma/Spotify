import React from "react";

export default function Playbar({ pauseSong, nextSong, previousSong }) {
  return (
    <div className="grid place-items-center bg-[#252525] p-4 text-black">
      <div className="seekbar relative my-4 w-full">
        <div className="h-1 w-full rounded-full bg-gray-500"></div>
        <div className="absolute -top-1 size-3 rounded-full bg-green-400 transition-transform duration-100"></div>
      </div>

      <div className="flex flex-row gap-3">
        <img
          onClick={previousSong}
          className="size-7 cursor-pointer invert transition-transform hover:scale-110 md:size-8"
          src="/images/previous.svg"
          alt="previous"
        />
        <img
          onClick={pauseSong}
          className="size-7 cursor-pointer invert transition-transform hover:scale-110 md:size-8"
          src="/images/pause.svg"
          alt="pause"
        />
        <img
          onClick={nextSong}
          className="size-7 cursor-pointer invert transition-transform hover:scale-110 md:size-8"
          src="/images/next.svg"
          alt="next"
        />
        
      </div>
    </div>
  );
}
