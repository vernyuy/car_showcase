"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <img
            src="/cised-bg-2.svg"
            className="block w-full object-cover min-h-[300px] max-h-[100vh]"
          />
          {/* <img
            v-if="windowWidth <= 767"
            src="~/assets/images/background.jpg"
            className="block w-full object-cover min-h-[300px] max-h-[100vh]"
          /> */}

          <div className="absolute px-4 md:px-0 text-center md:text-left inset-0 md:pr-3 pt-3 md:pt-0 md:pl-[100px] flex items-center h-full">
            <div>
              <div className="flex bg-transparent justify-center light md:max-w-lg">
                <div className="font-medium bg-transparent text-[16px] md:text-[20px] text-white max-w-full md:max-w-lg">
                  <h3 className="text-blue-600 text-4xl font-bold mb-6">
                    Welcome to CISED
                  </h3>
                  <p className="">
                    Build a highly scallable, secured, and easy to manage
                    systems at CISED
                  </p>
                  <p className="mt-3">What are you waiting for?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
