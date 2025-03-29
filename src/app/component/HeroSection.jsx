"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hallo Cuy,
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jadi Gini",
                1000,
                "Front End Dev",
                1000,
                "Indie Game Dev",
                1000,
                "Aseli Bang",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae iusto delectus nesciunt omnis iste ab cupiditate
            veritatis architecto rerum quas ad deserunt minima, officiis sint
            veniam harum tempore eius consequatur.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Aseli Cuy
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden relative">
            <Image
              src="/images/oke.jpg"
              alt="hero image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
