import React from "react";
import PropTypes from "prop-types";

export default function PlaylistCard({ image, title, description }) {
  return (
    <div className="group flex w-52 flex-col items-start rounded-md bg-[#252525] p-2 py-2 hover:cursor-pointer md:w-48">
      <div className="relative mx-auto">
        <img className="rounded-lg" src={image} alt={`Cover for ${title}`} />
        <div className="absolute bottom-2 right-2 grid size-10 transform place-items-center rounded-full bg-green-600 p-1 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-lg">
          <img
            className="size-6 transition-transform duration-300 ease-in-out group-hover:scale-125"
            src="/images/play.svg"
            alt="Play button"
          />
        </div>
      </div>
      <h3 className="py-2 text-center text-lg font-bold">{title}</h3>
      <p className="line-clamp-2 text-left text-sm">{description}</p>
    </div>
  );
}

// PropTypes for validation
PlaylistCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
