import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movies = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative">
        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="/" />
        <div className="top-0 absolute left-0 w-full h-full hover:bg-black/60 opacity-0 transition-all duration-300 text-white hover:opacity-100">
          <p className="text-xs whitespace-normal h-full flex items-center justify-center m-auto">{item.title}</p>
          <p className="absolute bottom-4 text-xs left-4 right-0">{item.release_date}</p>
          <p>{like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 " />}</p>
        </div>
      </div>
    </>
  );
};

export default Movies;
