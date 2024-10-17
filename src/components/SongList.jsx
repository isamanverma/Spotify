import React, { useEffect, useState, useRef } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const audioRef = useRef(null); // Reference for the audio element

  useEffect(() => {
    // Fetch the song names from the JSON file
    fetch("/songs/songs.json")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  const playSong = (song) => {
    // If there's already an audio playing, pause it
    if (audioRef.current) {
      audioRef.current.pause(); // Pause current audio
      audioRef.current.currentTime = 0; // Reset to start
    }

    // Create a new Audio object for the selected song
    audioRef.current = new Audio(song.file);
    audioRef.current
      .play()
      .catch((error) => console.error("Error playing audio:", error));
  };

  return (
    <div>
      <ul className="song-list-container h-[60vh] overflow-y-scroll md:h-[70vh]">
        {songs.map((song, index) => (
          <li
            onClick={() => playSong(song)} // Pass the song object to playSong
            className="song-card group flex cursor-pointer flex-row p-2 text-lg md:mx-3" // Added cursor-pointer for better UX
            key={index}
          >
            <div className="flex flex-row gap-1">
              <img
                className="invert group-hover:scale-110"
                src="/images/music.svg"
                alt="album cover"
              />
              <p className="line-clamp-1 text-sm md:w-[30ch] md:text-lg">
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
