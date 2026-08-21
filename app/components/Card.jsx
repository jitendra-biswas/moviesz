import Image from "next/image";
import React from "react";

const Card = ({movie}) => {
  return (
    <div className="group relative w-64 min-w-64 h-96 shrink-0 rounded-xl overflow-hidden">
      <Image
        src={movie.Poster}
        alt="Movie poster"
        fill
        sizes="256px"
        loading="eager"
        className="object-cover group-hover:scale-105 cursor-pointer transition-transform duration-300"
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
        <div className="absolute inset-0 p-4 text-white flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold">{movie.Title}</h2>
          <h2 className="text-xl font-bold">Captain Marvel</h2>
          <p className="text-sm mt-2">Movie</p>
        </div>
      </div>
    </div>
  );
};

export default Card;