import React from "react";

const SongList = ({ songs, playSong, currentSong }) => {
  return (
    <div>
      <ul className="song-list-container h-[60vh] overflow-y-scroll md:h-[70vh]">
        {songs.map((song) => (
          <li
            onClick={() => playSong(song)}
            className={`song-card group flex  justify-between cursor-pointer flex-row p-2 text-lg md:mx-3 ${
              currentSong && currentSong.file === song.file
                ? "bg-[#1e1e1e]"
                : "hover:bg-[#141414]"
            }`}
            key={song.id}
          >
            <div className="flex flex-row gap-1">
              <img
                className="size-10 invert group-hover:scale-110"
                src="/images/music.svg"
                alt="album cover"
              />
              <p className="truncate text-sm md:w-[25ch] md:text-lg">
                {song.name}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="hidden invert md:block"
                src="images/playNow.svg"
                alt="play"
              />
              <p className="hidden md:block">Play Now</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
