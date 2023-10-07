import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="px-0 py-10 md:p-10 bg-blue-900/20 flex">
      <div className="flex flex-col md:flex-row justify-center">
        <div className=" w-full flex border">
          <div className="m-auto w-3/4">
            <h3 className="font-bold text-xl text-center text-[#01001b] mb-6">
              ABOUT CISED
            </h3>
            <p className=" text-[17px] text-left md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut at
              esse sit deserunt, explicabo repellendus fuga neque ad commodi,
              nobis iste. Iure itaque possimus repudiandae ducimus, suscipit
              ipsam optio blanditiis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum, iusto? Debitis cupiditate maxime
              tempore minima illo rem nulla nesciunt!
            </p>
          </div>
        </div>
        <div className="  md:w-1/2 flex h-fit w-full min-h-fit">
          <Image
            src="/brand.svg"
            height={100}
            width={100}
            alt="brand"
            className="h-3/4 w-3/4 md:w-fit md:h-fit m-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
