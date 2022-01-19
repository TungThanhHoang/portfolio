import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="pb-20 pt-20 background-about dark:bg-colordark z-0  "
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center text-3xl md:text-4xl  font-bold text-green-900 dark:text-slate-50">
            About{" "}
            <span className="text-3xl md:text-4xl text-orangecustom">Me</span>
          </div>
          <div className="text-center pt-4 font-serif dark:text-slate-50">
            I'm a final year student majoring Information Technology{" "}
          </div>
          <div className="p-2 mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-2  gap-x-10 justify-between ">
            <div data-aos="fade-right">
              <div className="flex gap-2 text-xl md:text-2xl  font-bold text-orangecustom mb-4">
                <img src="../../user.png" alt="" width={30} height={30} />
                <span>Personal Infos</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-2 mb-10">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    First Name:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    Tùng
                  </span>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    Last Name:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    Hoàng Thanh
                  </span>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    Birthday:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    10/01/2000
                  </span>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    Phone:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    0326625927
                  </span>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    Address:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    Tỉnh Quảng Trị
                  </span>
                </div>
                <div className="flex ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold pr-2 pl-2 text-base text-darkcustom dark:text-slate-500">
                    Email:
                  </span>
                  <span className="text-graycustom dark:text-slate-50 font-medium text-md">
                    thanhtung1760@gmail.com
                  </span>
                </div>
              </div>
              <div></div>
            </div>
            {/* Education */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex-1 flex-start gap-y-2 mb-4"
            >
              <div className="flex gap-2 text-xl md:text-2xl  font-bold text-orangecustom mb-4">
                <img src="../../education1.png" width={30} height={30} alt="" />
                <span> Education</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-orange-400 stroke-orangecustom"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="  font-normal sm:font-semibold  dark:text-slate-50">
                  2018 - Present
                </div>
              </div>
              <div className="flex py-2 gap-2">
                <div className="w-6 stroke-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-orange-400  stroke-orangecustom inline-block "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      preserveAspectRatio="none"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="  font-normal sm:font-semibold  dark:text-slate-50">
                  Vietnam - Korea University of Information and Communication
                  Technology
                </div>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-orange-400 stroke-orangecustom "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <div className="  font-normal sm:font-semibold  dark:text-slate-50">
                  Information Technology Major
                </div>
              </div>
            </div>
            {/* Achievement */}
            <div data-aos="fade-right" className="flex-start gap-y-2 mt-4 mb-4">
              <div className="flex gap-2 text-xl md:text-2xl  font-bold text-orangecustom mb-4">
                <img
                  src="../../achievement.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span> Achievement</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-orange-400 stroke-orangecustom"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className=" font-normal sm:font-semibold dark:text-slate-50">
                  4th term scholarship
                </div>
              </div>
            </div>
            {/* Skills */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex-start gap-y-2 mt-4 mb-4"
            >
              <div className="flex gap-2 text-xl md:text-2xl  font-bold text-orangecustom mb-4">
                <img src="../../skill.png" width={30} height={30} alt="" />
                <span>Skills</span>
              </div>
              <div className="flex gap-2 mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-orange-400 stroke-orangecustom"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="  font-normal sm:font-semibold  dark:text-slate-50">
                  Read documents in English
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-orange-400 stroke-orangecustom"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="  font-normal sm:font-semibold  dark:text-slate-50">
                  HTML5 ,CSS3 ,JavaScript ,React Js, React Native, Tailwind,
                  Express Js, MongoDB, Git
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
