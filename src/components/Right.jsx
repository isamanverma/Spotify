import React from "react";
import Playlists from "./Playlists";
import Playbar from "./Playbar";

export default function Right({ playSong, pauseSong, nextSong, previousSong, isPlaying, currentSong, audioRef }) {
  return (
    <div className="flex w-full flex-col justify-between pt-1">
      <div>
        <div className="flex items-center justify-between rounded-lg bg-[#1f1f1f] p-2 md:px-4">
          <div className="flex gap-3">
            {/* <img className="invert" src="images/hamburger.svg" alt="menu" /> */}
            <img
              className="size-8 invert md:size-10"
              src="images/chevronLeft.svg"
              alt="back"
            />
            <img
              className="size-8 invert md:size-10"
              src="images/chevronRight.svg"
              alt="next"
            />
          </div>
          <div className="flex gap-3">
            <button className="text-sm text-gray-300 md:text-lg">Login</button>
            <button className="rounded-full bg-white p-2 px-4 text-sm text-black transition-colors hover:bg-gray-200 md:text-lg">
              Signup
            </button>
          </div>
        </div>
        <Playlists />
      </div>
      <Playbar
        playSong={playSong}
        pauseSong={pauseSong}
        nextSong={nextSong}
        previousSong={previousSong}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
      />
    </div>
  );
}
