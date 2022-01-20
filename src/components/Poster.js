import React from "react";
import { Link } from "react-router-dom";
function Poster() {
  return (
    <>
      <section className="h-screen md:pt-26 pt-10 background-container relative dark:bg-colordark2  ">
        {/* <div className="absolute top-0 left-0 bottom-0 z-0 h-screen max-w-screen-xl ">
        </div> */}
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row  justify-between  relative ">
            <div className=" mt-2 mb-12 md:mb-16 md:mt-10">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl  font-bold animation ease-in-out duration-300 uppercase"
              >
                <span className="text-yellowcustom"> Hi, I'm Thanh Tung.</span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="mt-4 flex space-x-2 mb-4"
              >
                <div className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-green-900 mb-2 animation ease-in-out duration-300 uppercase">
                  Front End {""}
                </div>
                <div className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-redcustom mb-2 animation ease-in-out duration-300 uppercase">
                  Developer
                </div>
                {/* <div className="text-3xl md:tex font-bold transition deplay-1000 ease-in-out">
                  Programer
                </div> */}
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=100006784328557"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
                data-aos-duration="2000"
                className="bg-gradient-to-r  from-colorbutton to-colorbutton2 text-whitecustom  px-5 py-3 text-md sm:px-6 sm:py-3 rounded-lg font-semibold sm:text-md md:text-md hover:bg-green-700 transition duration-200 shadow-sm"
              >
                Contact Me
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="flex justify-center  bg-center bg-contain "
            >
              <img
                className=" w-auto h-96 md:w-96 md:h-full  rounded-xl shadow-md   "
                src="../avatar-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* icon arrow down */}

        <div className="absolute animate-pulse   left-1/2 bottom-20 -translate-x-1/2  w-10 h-10  rounded-xl cursor-pointer border-dashed border-2 border-orangecustom ">
          <a href="#about" className=" absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-4 w-4 text-orangecustom"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

export default Poster;
