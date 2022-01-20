import React from "react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className=" background-about pt-20 pb-20 dark:bg-colordark"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center text-3xl md:text-4xl  mb-5 md:mb-9  font-bold text-green-900 dark:text-slate-50">
            Contact{" "}
            <span className="text-3xl md:text-4xl text-orangecustom">Me</span>
          </div>
          <div className="flex items-center justify-center space-x-5 mb-10 cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=100006784328557">
              <img src="../../facebook.png" alt="" width={30} height={30} />
            </a>
            <a href="mailto:thanhtung1760@example.com">
              <img src="../../gmail.png" alt="" width={30} height={30} />
            </a>
            <img src="../../twitter.png" alt="" width={30} height={30} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            className="flex gap-10 flex-col md:flex-row px-2"
          >
            <div>
              <div className="text-2xl md:text-3xl  font-bold text-green-900 dark:text-slate-300">
                Contact Information
              </div>
              <div className="text-sm font-normal pt-2 pb-4 dark:text-slate-50">
                Contact me, Please!
              </div>
              <div>
                <div className="flex gap-4 items-center py-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 fill-orangecustom"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                        clipRule="evenodd"
                        className="font-bold text-lg"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-md A dark:text-slate-300">
                      Address
                    </div>
                    <div className="text-sm font-normal dark:text-slate-50 ">
                      Huyện Gio Linh, Tỉnh Quảng Trị
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-orangecustom"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div className="flex flex-col gap-1 py-2">
                    <div className="font-bold text-md dark:text-slate-300">
                      Email
                    </div>
                    <div className="text-sm font-normal dark:text-slate-50">
                      thanhtung1760@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 fill-orangecustom"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-md dark:text-slate-300">
                      Call Me
                    </div>
                    <div className="text-sm font-normal dark:text-slate-50">
                      0326625927
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              className="flex-1"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full h-12 py-2 px-3 dark:bg-colordark2 text-gray-700 dark:text-slate-300 leading-tight focus:outline-none focus:bg-white focus:border-orange-50 border-gray-500"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="shadow appearance-none border h-12 rounded w-full py-2 px-3 dark:bg-colordark2 text-gray-700 dark:text-slate-300 leading-tight focus:outline-none focus:bg-white focus:border-orange-50 border-gray-500"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="py-6">
                <input
                  className="shadow appearance-none h-12 border rounded w-full py-2 px-3 dark:bg-colordark2 text-gray-700 dark:text-slate-300 leading-tight focus:outline-none focus:bg-white focus:border-orange-50 border-gray-500"
                  type="text"
                  placeholder="SubTitle"
                />
              </div>
              <textarea
                className="w-full shadow border rounded  p-4 text-gray-700 dark:text-slate-300 leading-tight focus:outline-none dark:bg-colordark2 focus:bg-white focus:border-orange-50 border-gray-500"
                name="txt"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="shadow-lg  mt-5 px-8 py-3 font-semibold text-slate-50 bg-gradient-to-r ml-3 from-colorbutton to-colorbutton2 hover:from-colorbutton2 hover:to-colorbutton rounded-lg ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
