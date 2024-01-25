import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>

    <header class="bg-white">
        <nav class="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="...">
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                {/* <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon> */}
            </div>
    </header>
    </>
  );
};

export default Navbar;
