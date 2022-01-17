import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className=" background-about pt-20 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center text-3xl md:text-4xl  mb-10 md:mb-16  font-bold text-green-900">
            Contact{" "}
            <span className="text-3xl md:text-4xl text-orangecustom">Me</span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex gap-10 flex-col md:flex-row px-2"
          >
            <div>
              <div className="text-2xl md:text-3xl  font-bold text-green-900">
                Contact Information
              </div>
              <div className="text-sm font-normal pb-4">
                Contact me, Please!
              </div>
              <div>
                <div className="flex gap-4 items-center">
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
                  <div>
                    <div className="font-bold text-lg">Address</div>
                    <div className="text-sm font-normal ">
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
                  <div>
                    <div className="font-bold text-lg">Mail</div>
                    <div className="text-sm font-normal">
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
                  <div>
                    <div className="font-bold text-lg">Call Me</div>
                    <div className="text-sm font-normal">0326625927</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="shadow appearance-none border h-12 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="py-6">
                <input
                  className="shadow appearance-none h-12 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="SubTitle"
                />
              </div>
              <textarea
                className="w-full shadow border rounded  p-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="txt"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="shadow-lg hover:bg-grayyellowcustom transition duration-300 mt-5 px-8 py-3 font-semibold text-green-900 bg-orange-300 rounded-lg ">
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
