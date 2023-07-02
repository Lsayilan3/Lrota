import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {

  const apiUrl = "https://localhost:44375/WebAPI/api/enPopulerLists";

  const [popularTours, setPopularTours] = useState([]);
  const [colValues, setColValues] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setPopularTours(response.data);
      console.log(response.data.data)
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };
  useEffect(() => {
    apiCek();
  }, []);
  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {popularTours.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
