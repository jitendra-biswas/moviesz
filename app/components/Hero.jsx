"use client";

import React, { useEffect, useState } from "react";
import Card from "@/app/components/Card";
import axios from "axios";

const Hero = ({ searchTerm }) => {
  const [responseData, setResponseData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_MOVIE_API}${searchTerm}&page=${page}`
        );

        const movies = (res.data.Search || []).filter(
          (movie) => movie.Poster && movie.Poster !== "N/A"
        );

        if (page === 1) {
          setResponseData(movies);
        } else {
          setResponseData((prev) => [...prev, ...movies]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [searchTerm, page]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <div className="w-full min-h-screen pt-20">
      <div className="flex flex-wrap gap-5">
        {responseData.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {responseData.length > 0 && (
        <div className="flex justify-center py-10">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-3 bg-red-500 text-white rounded-lg cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;