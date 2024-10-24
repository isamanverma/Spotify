import React, { useState, useEffect, useRef } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch("/songs/songs.json")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = song.file;
      audioRef.current.play();
    }
  };

  const pauseSong = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (currentSong) {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong(currentSong);
      }
    }
  };

  const nextSong = () => {
    if (songs.length > 0 && currentSong) {
      const currentIndex = songs.findIndex((song) => song.file === currentSong.file);
      const nextIndex = (currentIndex + 1) % songs.length;
      playSong(songs[nextIndex]);
    }
  };

  const previousSong = () => {
    if (songs.length > 0 && currentSong) {
      const currentIndex = songs.findIndex((song) => song.file === currentSong.file);
      const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
      playSong(songs[previousIndex]);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ([" ", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case " ":
          togglePlayPause();
          break;
        case "ArrowLeft":
          if (event.metaKey || event.ctrlKey) {
            previousSong();
          }
          break;
        case "ArrowRight":
          if (event.metaKey || event.ctrlKey) {
            nextSong();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSong, isPlaying, songs]);

  return (
    <div className="flex h-screen w-screen select-none bg-black text-white">
      <audio ref={audioRef} />
      <Left songs={songs} playSong={playSong} currentSong={currentSong} />
      <Right
        playSong={playSong}
        pauseSong={pauseSong}
        nextSong={nextSong}
        previousSong={previousSong}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
