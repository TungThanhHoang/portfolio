import React from "react";
import Lottie from "lottie-react";
import loadding from '../assets/loadding.json'
function About() {
  return (
    <>
      <section
        id="about"
        className="pb-20 pt-20 background-about dark:bg-colordark z-0  "
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center sm:text-4xl text-3xl font-bold text-white">
            About Me
          </div>
          <div className="text-center pt-4 text-slate-200">
            I'm a final year student majoring Information Technology{" "}
          </div>
          <div className="mt-6 md:mt-10 grid md:grid-cols-2 grid-cols-1 sm:gap-6 gap-16 sm:p-4 p-4 ">
            <div className="">
              <div>
                <h1 className="text-white sm:text-3xl text-xl font-bold">Hoang Thanh Tung</h1>
                <p className="text-slate-300 mt-3 text-justify sm:text-base text-sm">I would like to work as a front-end developer so that I can apply my knowledge and skills to work. Hopefully, the working environment at the company will help me equip myself with more experience and skills to achieve my goal of becoming a web developer.</p>
                <div className="flex flex-wrap mt-4">
                  <span className="bg-indigo-500 px-4 py-2 rounded-full text-white font-bold text-xs mr-1 mt-2">10-01-2000</span>
                  <span className="bg-blue-500 px-4 py-2 rounded-full text-white font-bold text-xs mr-1 mt-2">Quảng Trị</span>
                  <span className="bg-fuchsia-500 px-4 py-2 rounded-full text-white font-bold text-xs mr-1 mt-2">0326625927</span>
                  <span className="bg-yellow-500 px-4 py-2 rounded-full text-white font-bold text-xs mr-1 mt-2">thanhtung1760@gmail.com</span>
                  <span className="bg-violet-500 px-4 py-2 rounded-full text-white font-bold text-xs mr-1 mt-2">Infomation Technology</span>
                  <span className="bg-orange-500 px-4 py-2 rounded-full text-white font-bold text-xs mt-2 mr-1">VietNam - Korea University of Infomation and Communication Technology</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="../../background.png" alt="" />
              <Lottie className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" animationData={loadding} loop={true} width={100} height={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
