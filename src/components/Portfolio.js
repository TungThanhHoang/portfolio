import React from "react";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="py-5 background-portfolio dark:bg-colordark2 pt-20"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center text-3xl md:text-4xl  font-bold text-orangecustom ">
            My Work{" "}
            <span className="text-3xl md:text-4xl text-green-900 dark:text-slate-50">
              Experience
            </span>
          </div>
          <div className="text-center pt-4 font-serif dark:text-slate-50">
            A few of my standard projects
          </div>
          <div className=" flex flex-wrap flex-col md:flex-row   mt-8 gap-6 mb-10">
            {/* project 1 */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className=" p-4 bg-slate-50 shadow-lg hover:shadow-2xl rounded-xl m-2 dark:bg-colordark3 h-128   "
            >
              <div className="text-center dark:text-slate-50  font-semibold py-3 text-lg">
                🛒 Shopping App
              </div>
              <div className="font-semibold text-green-900">
                Cros-platform App
              </div>
              <ul>
                <li className="flex items-center gap-3">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      React Js, React Native
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../backend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Back End:{" "}
                    <span className="text-orangecustom cursor-pointer">
                      {" "}
                      Strapi CMS
                    </span>{" "}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="../../database.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    DataBase: <span className="text-orangecustom">MongoDB</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../function.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Function:{" "}
                  </span>
                </li>
                <ul className="grid grid-cols-2 gap-3 mb-2">
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Login, Register
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    View Product
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    View Category
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Add to Cart
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Choose Product in Cart
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Payment
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Filter Product
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Search
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Delivery
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Change Info User
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    View Order
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    QR Code
                  </li>
                </ul>
              </ul>
              <div className="absolute bottom-4">
                <button className="font-semibold text-sm text-slate-50 shadow-md bg-gradient-to-r from-colorbutton to-colorbutton2 px-4 py-3 hover:from-colorbutton2 hover:to-colorbutton rounded-xl">
                  A few pictures
                </button>
                <button className="py-2">
                  <a
                    className="font-semibold text-sm text-slate-50 shadow-md bg-gradient-to-r ml-3 from-colorbutton to-colorbutton2 px-4 py-3.5 hover:from-colorbutton2 hover:to-colorbutton rounded-xl"
                    href="https://covidshoppingmarket.herokuapp.com"
                  >
                    Link to Web
                  </a>
                </button>
              </div>
            </div>
            {/* project 2  */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className=" p-4 bg-slate-50 shadow-lg hover:shadow-2xl rounded-xl m-2 dark:bg-colordark3 h-128 "
            >
              <div className="text-center text-lg font-semibold  dark:text-slate-50 py-3">
                🍔 Landing Page FoodShop
              </div>
              <ul className="mb-10">
                <li className="flex items-center gap-3">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      HTML5, CSS3, JavaScript
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../backend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Back End:{" "}
                    <span className="text-orangecustom cursor-pointer">
                      {" "}
                      None
                    </span>{" "}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="../../database.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    DataBase: <span className="text-orangecustom">None</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../function.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Function:{" "}
                  </span>
                </li>
              </ul>
              <div className="absolute bottom-4">
                <button className="font-semibold text-sm text-slate-50 shadow-md bg-gradient-to-r from-colorbutton to-colorbutton2 px-4 py-3 hover:from-colorbutton2 hover:to-colorbutton rounded-xl">
                  A few pictures
                </button>
                <button className="py-2">
                  <a
                    className="font-semibold text-sm text-slate-50 shadow-md bg-gradient-to-r ml-3 from-colorbutton to-colorbutton2 px-4 py-3.5 hover:from-colorbutton2 hover:to-colorbutton rounded-xl"
                    href="https://covidshoppingmarket.herokuapp.com"
                  >
                    Link to Web
                  </a>
                </button>
              </div>
            </div>
            {/* project 3 */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className=" p-4 bg-slate-50 shadow-lg hover:shadow-2xl rounded-xl m-2 dark:bg-colordark3 h-128 "
            >
              <div className="text-center font-semibold  dark:text-slate-50 py-3 text-lg">
                📽️ Movie Watching App
              </div>
              <div className="font-semibold text-green-900">
                Cros-platform App
              </div>
              <ul>
                <li className="flex items-center gap-3">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      React Js, React Native
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../backend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Back End:{" "}
                    <span className="text-orangecustom cursor-pointer">
                      {" "}
                      Node Js
                    </span>{" "}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="../../database.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    DataBase: <span className="text-orangecustom">MongoDB</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <img src="../../function.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Function:{" "}
                  </span>
                </li>
                <ul className="grid grid-cols-2 gap-3 mb-2">
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Login, Register
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    View Movie
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    View Genres
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Recommender Movie
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Love to movie
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Search
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Add Favorite
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Movie Player
                  </li>
                  <li className="font-sans text-md dark:text-slate-200 ">
                    Change Info User
                  </li>
                </ul>
              </ul>
              <div className="absolute bottom-4">
                <button className="font-semibold text-sm  text-slate-50 shadow-md bg-gradient-to-r from-colorbutton to-colorbutton2 px-4 py-3 rounded-xl  hover:from-colorbutton2 hover:to-colorbutton  ">
                  A few pictures
                </button>
                <button className="py-2">
                  <a
                    className="font-semibold text-sm text-slate-50 shadow-md bg-gradient-to-r ml-3 from-colorbutton to-colorbutton2 px-4 py-3.5 hover:from-colorbutton2 hover:to-colorbutton rounded-xl"
                    href="https://covidshoppingmarket.herokuapp.com"
                  >
                    Link to Web
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
