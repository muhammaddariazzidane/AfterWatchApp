import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movies from "./Movies";

const Category = ({ title, fetchURL, ID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies, "ini mo");

  const SlideLeft = () => {
    var slider = document.getElementById("slider" + ID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider" + ID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-white font-bold p-4 md:text-xl">{title}</h1>
      <div className="flex relative items-center group">
        <MdChevronLeft onClick={SlideLeft} size={30} className=" group-hover:block left-0 absolute hidden rounded-full cursor-pointer z-10  bg-white" />
        <div id={"slider" + ID} className="w-ful h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  ">
          {movies.map((item, id) => {
            return <Movies item={item} key={item.id} />;
          })}
        </div>
        <MdChevronRight onClick={SlideRight} size={30} className=" group-hover:block right-0 absolute hidden  rounded-full cursor-pointer z-10 bg-white" />
      </div>
    </>
  );
};

export default Category;
