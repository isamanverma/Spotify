import React from "react";
import PlaylistCard from "./PlaylistCard";

export default function Playlists() {
  return (
    <div className="p-4 text-white">
      <h1 className="py-2 text-xl font-bold">Spotify Playlists</h1>
      <div className="flex flex-row flex-wrap gap-5 rounded-lg">
        <PlaylistCard
          image={
            "https://i.scdn.co/image/ab67616d00001e0252b2a3824413eefe9e33817a"
          }
          title={"1989 (Deluxe)"}
          description={""}
        />
        <PlaylistCard
          image={
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8461282a4dc0e0a2c293cc5c16"
          }
          title={"in love in october"}
          description={
            "perfect songs that feel like falling in love during the fall // insta: @dyldion_playlists"
          }
        />
      </div>
    </div>
  );
}
