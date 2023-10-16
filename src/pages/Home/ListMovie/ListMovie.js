import React, { useEffect, useState } from "react";
import { getListMovie } from "../../../services/Api";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { A11y, Grid, Navigation, Pagination } from "swiper/modules";
import "../../../assets/Slider/Slider.css";
import { Card } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((res) => {
        console.log(res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
              grid: { rows: 1 },
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          spaceBetween={10}
          modules={[Grid, Navigation, Pagination, A11y]}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="grid md:col-span-1"
        >
          <div className="flex flex-wrap">
            {movieArr.slice(0, 9).map((item, index) => {
              return (
                <div className="test">
                  <SwiperSlide key={index} className="relative overflow-hidden">
                    {/* <div className="p-4"> */}
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={item.hinhAnh}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {item.maPhim}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {item.tenPhim}
                        </h1>
                        <p className="leading-relaxed mb-3">{item.moTa}</p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                      <div
                        className="absolute h-full w-full bg-black/75 flex items-center justify-center left-0 -bottom-[1px] right-0 z-[1] scale-0
                    opacity-0 hover:opacity-100 hover:scale-100 transition-all duration-500 rounded-lg border-solid border-2 border-orange-500"
                      >
                        <div className=" relative -translate-y-1/2 top-1/2 text-center text-white w-32 h-32 transition-all">
                          {item.tenPhim}
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </SwiperSlide>
                </div>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>

    // <div className="container my-28 mx-auto">
    //   <Swiper
    //     slidesPerView={3}
    //     grid={{
    //       rows: 2,
    //       fill: "row",
    //     }}
    //     spaceBetween={10}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Grid, Pagination]}
    //   >
    //     {movieArr.map((item, index) => {
    //       return (
    //         <SwiperSlide>
    //           <Card
    //             hoverable
    //             style={
    //               {
    //                 // width: 240,
    //               }
    //             }
    //             cover={
    //               <img
    //                 className="h-48 object-cover"
    //                 alt="example"
    //                 src={item.hinhAnh}
    //               />
    //             }
    //           >
    //             {/* <Meta
    //               title="Europe Street beat"
    //               description="www.instagram.com"
    //             />
    //             <button className="px-20 py-5 rounded bg-red-400">
    //               <NavLink to={`/movie/${item.maPhim}`} className="text-white">
    //                 Mua ve
    //               </NavLink>
    //             </button> */}
    //           </Card>
    //         </SwiperSlide>
    //       );
    //     })}
    //     {/* <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide> */}
    //   </Swiper>
    // </div>
  );
}
