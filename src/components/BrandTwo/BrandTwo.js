import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Preloader from "../Preloader/Preloader";

SwiperCore.use([Autoplay]);

const slideOptions = {
  spaceBetween: 100,
  slidesPerView: 5,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

const BrandTwo = ({ brandThree = false }) => {
  const apiUrl = "https://api.limitsizrota.com/api/brandTwoes";

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("API çekme hatası ne", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  const photoUrl = "https://api.limitsizrota.com";
  return (
    <section className={brandThree ? "brand-two brand-three" : "brand-two"}>
      <Preloader loading={loading} />
      <Container>
        <Swiper className="thm-swiper__slider" {...slideOptions}>
          <div className="swiper-wrapper">
          {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={photoUrl + item.photo} alt={item.photo || ""}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandTwo;
