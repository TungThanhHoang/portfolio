import React from "react";
function Poster() {
  return (
    <>
      <section className="h-screen md:pt-26 pt-10 background-container relative dark:bg-colordark2  ">
        {/* <div className="absolute top-0 left-0 bottom-0 z-0 h-screen max-w-screen-xl ">
        </div> */}
        <div className="max-w-screen-xl mx-auto px-4 mt-6">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-0 relative ">
            <div className="col-span-2 mt-2 mb-12 md:mb-16 md:mt-10">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-2xl sm:text-4xl md:text-4xl text-white lg:text-6xl font-bold animation ease-in-out duration-300 uppercase"
              >
                <span className="">Hi,</span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="mt-2 text-2xl sm:text-4xl md:text-4xl text-white lg:text-6xl font-bold animation ease-in-out duration-300 uppercase"
              >
                <span className="">I'm Thanh Tung.</span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="mt-2 flex space-x-2 mb-4"
              >
                <div className="text-2xl text-white sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-2 animation ease-in-out duration-300 uppercase">
                  Front End Developer
                </div>
                {/* <div className="text-3xl md:tex font-bold transition deplay-1000 ease-in-out">
                  Programer
                </div> */}
              </div>
              <div data-aos="fade-right"
                data-aos-duration="1500" className="mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=100006784328557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded-lg bg-blue-500 text-white px-7 py-3 text-md sm:px-6 sm:py-3 font-bold sm:text-md md:text-md hover:bg-blue-600 transition duration-200 shadow-sm"
                >
                  Contact Me
                </a>
                <a className=" ml-4 rounded-lg bg-gray-50 px-7 py-3 text-md sm:px-6 sm:py-3 font-bold sm:text-md md:text-md hover:bg-gray-300 transition duration-200 shadow-sm" target="_blank" href="https://drive.google.com/file/d/1Qwk8FXMWtwlWlP5C6-3i16xfAgmzriAY/view?usp=sharing" rel="noreferrer">My CV</a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="bg-center bg-contain "
            >
              <img
                className="object-contain w-full h-80 sm:w-auto sm:h-3/4 rounded-xl shadow-md   "
                src="../avatar-new.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* icon arrow down */}
      </section>
    </>
  );
}

export default Poster;
