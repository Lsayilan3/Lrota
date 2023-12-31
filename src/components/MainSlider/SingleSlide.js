
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ data }) => {

  const { subTitle, title, photo, } = data || {};

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${photoUrl + photo})`,
        }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <div className="swiper-slide-inner">
          <Row>
            <Col xl={12}>
              <h2>{title}</h2>
              <p>{subTitle}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
