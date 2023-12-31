import aboutOne from "@/data/aboutOne";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Preloader from "../Preloader/Preloader";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
} = aboutOne;

const AboutOne = () => {

  const apiUrl = "https://api.limitsizrota.com/api/avantajs";

  const [data, setData] = useState({ photo: "" });

  const [loading, setLoading] = useState(true);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.log("API çekme hatası ne", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  const photoUrl = "https://api.limitsizrota.com/api";

  return (
    <section className="about-one">
      <Preloader loading={loading} />
      <div className="about-one-shape-1 animated slideInLeft">
        <Image src={shape1.src} alt="" />
      </div>
      <div className="about-one-shape-2 float-bob-y">
        <Image src={shape2.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated fadeInLeft">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image src={photoUrl + data?.photo} alt={data?.photo || ""} />
                </div>
                <div className="about-one__call">
                  <div className="about-one__call-icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="about-one__call-number">
                    <p>Şimdi Tur Rezervasyonu Yapın</p>
                    <h4>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </h4>
                  </div>
                </div>
                <div className="about-one__discount">
                  <h2>{discount}</h2>
                  <h3></h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="about-one__right-text">{destination}</p>
              <ul className="list-unstyled about-one__points">
                {points.map((point, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="contact" className="about-one__btn thm-btn">
                Şimdi bizimle rezervasyon yapın
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
