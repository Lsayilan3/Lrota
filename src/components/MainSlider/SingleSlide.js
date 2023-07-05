import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {},data }) => {
  const { bg } = slide;

  const { subTitle,title , photo, } = data || {};

  const apiUrl = "https://localhost:44375/WebAPI/api/sliders";

  const [spots, setSpots] = useState([]);;


  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setSpots(response.data);
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  const photoUrl = "https://localhost:44375/WebAPI/";

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
