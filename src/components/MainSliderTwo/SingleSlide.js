import React from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {},data }) => {
  const { bg } = slide;
  const {  photo } = data || {};



  const photoUrl = "https://api.limitsizrota.com";
  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${photoUrl + photo})`,
        }}
      ></div>
      <Container>
        <div className="swiper-slide-inner">
          <div className="tour-details-slider_icon">
            <a href="https://www.youtube.com/@limitsizrota" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-heart"></i>
            </a>
          </div>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
