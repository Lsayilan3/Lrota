import mainSliderData from "@/data/mainSliderData";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSlider = () => {

  const apiUrl = "https://localhost:44375/WebAPI/api/sliders";

  const [data, setData] = useState([]);;


  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
    } catch (error) {
      console.log("API çekme hatası ne", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {data.map((data) => (
            <SingleSlide key={data.sliderId} data={data} />
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>{" "}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
