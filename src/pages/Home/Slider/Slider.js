import { message } from "antd";
import React, { useEffect, useState } from "react";
import { getDataSlider } from "../../../services/Api";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  const [banner, setBanner] = useState([]);
  console.log("🚀 ~ file: Slider.js:15 ~ Slider ~ banner:", banner);
  let fetchData = async () => {
    try {
      let response = await getDataSlider();
      console.log("🚀 ~ file: Slider.js:18 ~ fetchData ~ response:", response);
      setBanner(response.data.content);
    } catch {
      message.error("Da co loi xay ra");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // try catch

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  return (
    // <Carousel autoplay effect="fade" afterChange={onChange}>
    //   {banner.map((item, index) => {
    //     return (
    //       <img
    //         src={item.hinhAnh}
    //         key={index}
    //         className="h-40 sm:h-64 lg:h-96 xl:h-200 w-full object-cover"
    //       />
    //     );
    //   })}
    // </Carousel>
    <Swiper
      // effect={"fade"}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banner.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" sm:h-64 md:h-full lg:h-full xl:h-200">
              <img
                alt="slider image"
                src={item.hinhAnh}
                key={index}
                className=" object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
