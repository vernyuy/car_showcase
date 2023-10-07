import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cisedFooterLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="flex flex-col text-[#01000b] mt- border-t border-[#01000b]">
      <div
        className="flex max-md:flex-col flex-wrap
           justify-between gap-5 px-6 py-2 sm:px-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/cised-logo.png"
            alt="logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <p className="text-base text-[#01000b]">
            CISED 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        {/* footer__links */}

        <div className=" flex">
          {cisedFooterLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-[#01000b]"
                >
                  <div className="flex gap-2 hover:text-[#01000b] hover:underline">
                    {link.icon ? (
                      <Image
                        src={link.icon}
                        height={20}
                        width={20}
                        alt="icon"
                      />
                    ) : (
                      <div></div>
                    )}
                    <p className="text-[14px]">{link.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-wrap mt-10 bg-[#01000b] text-white border-gray-100 justify-between sm:px-16 px-6 py-3">
        <p>@2023 CISED All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-white">
            Privacy Policy
          </Link>
          <Link href="/home" className="text-white">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
