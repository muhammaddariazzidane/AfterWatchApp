import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { Image } from "next/image";
import requests from "./../src/Req";
import Hero from "./Hero";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  return (
    <div className="w-full h-[600px] mb-20">
      <div className="w-full h-full">
        <div className="w-full absolute h-[600px] bg-gradient-to-b from-black via-transparent to-black  "></div>
        <img className="object-cover opacity-40 w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="/#" />
        <Hero />
        {/* <div className="absolute w-full z-[9999] top-[30%] p-4 md:p-8 ">
          <div className="flex justify-center w-[50%] mx-auto">
            <p className="lg:text-5xl text-2xl text-center text-white font-bold">Film, acara TV tak terbatas, dan lebih banyak lagi</p>
          </div>
          <p className="mt-3 text-center text-white">Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
          <div className="w-full mt-5 flex mx-auto justify-center">
            <input type="text" className="w-1/3 focus:outline-none selection:bg-yellow-500 selection:text-white h-[3.7rem]  " placeholder="email" />
            <button className="flex p-[0.89rem] text-white bg-indigo-600 px-8 lg:text-xl">
              Mulai
              <BiArrowToRight className="mx-2" size={30} />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
