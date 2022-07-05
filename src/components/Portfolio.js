import React from "react";
import Lottie from "lottie-react";
import one from '../assets/1.json'
import two from '../assets/2.json'
import three from '../assets/3.json'
import four from '../assets/4.json'

function Portfolio() {

  return (
    <>
      <section
        id="portfolio"
        className="py-5 background-portfolio dark:bg-colordark2 pt-20 mb-10"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center sm:text-4xl text-3xl font-bold text-white">
            My Work Experience
          </div>
          <div className="text-center text-md pt-4 text-slate-300">
            A few of my standard projects
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 mt-10 px-4">
            <div className="cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img className="rounded-md hover:scale-105 transition duration-700 ease-in-out" src="https://res.cloudinary.com/i-h-c-n-ng/image/upload/v1656820750/Screenshot_2022-07-03_105606_qf3hdx.png" alt="" />
              </div>
              <div className="flex flex-wrap justify-start items-center relative mt-2">
                <div className="text-white bg-sky-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">React JS</div>
                <div className="text-white bg-amber-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">SQL Server</div>
                <div className="text-white bg-emerald-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">Node JS</div>
                <div className="text-white bg-cyan-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">React Native</div>
                <div className="text-white bg-pink-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">Distributed Database</div>
                <div className="text-white bg-indigo-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">Tailwind CSS</div>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h1 className="ml-2 sm:text-2xl text-xl font-bold text-white text-justify mt-2">Management system for Da Nang University</h1>
              </div>
            </div>
            <Lottie className="hidden sm:block" animationData={one} loop={true} width={100} height={100} />
            <Lottie className="hidden sm:block" animationData={two} loop={true} width={100} height={100} />
            <div className="cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img className="rounded-md hover:scale-105 transition duration-700 ease-in-out" src="https://res.cloudinary.com/i-h-c-n-ng/image/upload/v1656988798/Screenshot_2022-07-05_093937_zgefig.png" alt="" />
              </div>
              <div className="flex flex-wrap justify-start items-center mt-2">
                <div className="text-white bg-violet-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">HTML, CSS</div>
                <div className="text-white bg-orange-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">JavaScript</div>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h1 className="ml-2 sm:text-2xl text-xl font-bold text-white text-justify mt-2">Food Landing Page</h1>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img className="rounded-md hover:scale-105 transition duration-700 ease-in-out" src="https://res.cloudinary.com/i-h-c-n-ng/image/upload/v1656988642/Screenshot_2022-07-05_093645_dh3ljj.png" alt="" />
              </div>
              <div className="flex flex-wrap justify-start items-center mt-2">
                <div className="text-white bg-sky-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">React JS</div>
                <div className="text-white bg-amber-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">MongoDB</div>
                <div className="text-white bg-cyan-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">React Native</div>
                <div className="text-white bg-purple-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">Strapi CMS</div>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h1 className="ml-2 sm:text-2xl text-xl font-bold text-white text-justify mt-2">Shopping Market</h1>
              </div>
            </div>
            <Lottie className="hidden sm:block" animationData={three} height={200} />
            <Lottie className="hidden sm:block" animationData={four} height={200} />
            <div className="cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img className="rounded-md hover:scale-105 transition duration-700 ease-in-out" src="https://res.cloudinary.com/i-h-c-n-ng/image/upload/v1656988936/Screenshot_2022-07-05_094204_fo4xsy.png" alt="" />
              </div>
              <div className="flex flex-wrap justify-start items-center mt-2">
                <div className="text-white bg-sky-500 rounded-full font-bold text-center mt-3 px-4 py-2 text-xs mr-1">React JS</div>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h1 className="ml-2 text-2xl font-bold text-white text-justify mt-2">Tracking Covid-19</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
