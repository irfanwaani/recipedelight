import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div
      className={`relative h-[70vh] w-full flex flex-col justify-center items-center px-6 lg:px-80 bg-[url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center`}
    >
      <div className="absolute w-full h-full bg-[#00000064]"></div>
      <div className="relative z-10 flex gap-3 flex-col justify-center items-center text-white">
        <h1 className="text-[28px] lg:text-[40px] font-bold font-sans text-center">
          Recipes You Fall In Love With
        </h1>
        <p className="text-md  lg:text-lg text-center tracking-wide">
          Discover delightful recipes that will steal your heart! From
          comforting classics to innovative dishes, each recipe is crafted to
          inspire your cooking and satisfy your cravings. Perfect for any
          occasion, these recipes will make you fall in love!
        </p>
        <Link
          href={"/recipes"}
          className="bg-white text-black duration-75 px-6 py-2 rounded-lg mt-3 uppercase font-sans tracking-widest hover:bg-fuchsia-600 hover:text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default Hero;
