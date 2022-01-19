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
          <div className=" flex-col lg:flex-row flex  mt-8 gap-4">
            {/* project 1 */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              className="flex-1 p-4"
            >
              <div className="text-center dark:text-slate-50  font-semibold py-4 text-lg">
                🛒 Shopping App
              </div>
              <div className="font-semibold text-green-900">
                Cros-platform App
              </div>
              <ul>
                <li className="flex items-center gap-2">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      React Js, React Native
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2 py-2">
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
                <li className="flex items-center gap-2">
                  <img src="../../database.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    DataBase: <span className="text-orangecustom">MongoDB</span>
                  </span>
                </li>
                <li className="flex items-center gap-2 py-2">
                  <img src="../../function.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Function:{" "}
                  </span>
                </li>
                <ul className="grid grid-cols-2 gap-2 mb-2">
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
              <button className="font-semibold text-orange-400 hover:text-green-900">
                A few pictures --&gt;
              </button>
              <div className="py-2">
                <a
                  className="font-semibold text-orange-400 hover:text-green-900"
                  href="https://covidshoppingmarket.herokuapp.com"
                >
                  Link to Web --&gt;
                </a>
              </div>
            </div>
            {/* project 2  */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              className="flex-1 p-4"
            >
              <div className="text-center text-lg font-semibold  dark:text-slate-50 py-4">
                🍔 Landing Page FoodShop
              </div>
              <ul>
                <li className="flex items-center gap-2">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      HTML5, CSS3, JavaScript
                    </span>
                  </span>
                </li>
              </ul>
              <button className="font-semibold text-orange-400 hover:text-green-900">
                A few pictures --&gt;
              </button>
              <div className="py-2">
                <a
                  className="font-semibold text-orange-400 hover:text-green-900"
                  href="https://covidshoppingmarket.herokuapp.com"
                >
                  Link to Web --&gt;
                </a>
              </div>
            </div>
            {/* project 3 */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              className="flex-1 p-4"
            >
              <div className="text-center font-semibold  dark:text-slate-50 py-4 text-lg">
                📽️ Movie Watching App
              </div>
              <div className="font-semibold text-green-900">
                Cros-platform App
              </div>
              <ul>
                <li className="flex items-center gap-2">
                  <img src="../../frontend.png" alt="" width={30} height={30} />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    Front End:{" "}
                    <span className="text-orangecustom cursor-pointer ">
                      React Js, React Native
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2 py-2">
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
                <li className="flex items-center gap-2">
                  <img src="../../database.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    DataBase: <span className="text-orangecustom">MongoDB</span>
                  </span>
                </li>
                <li className="flex items-center gap-2 py-2">
                  <img src="../../function.png" width={30} height={30} alt="" />{" "}
                  <span className="font-semibold text-darkcustom dark:text-slate-100">
                    {" "}
                    Function:{" "}
                  </span>
                </li>
                <ul className="grid grid-cols-2 gap-2 mb-2">
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
              <button className="font-semibold text-orange-400 hover:text-green-900">
                A few pictures --&gt;
              </button>
              <div className="py-2">
                <a
                  className="font-semibold text-orange-400 hover:text-green-900"
                  href="https://covidshoppingmarket.herokuapp.com"
                >
                  Link to Web --&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
