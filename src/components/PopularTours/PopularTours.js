import popularTours from "@/data/popularTours";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });



const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const PopularTours = () => {

  const apiUrl = "https://localhost:44375/WebAPI/api/enPopulerLists";

  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      const firstFiveData = response.data.slice(0, 10); // İlk 5 veriyi al
      setData(firstFiveData);

      // Backend'den gelen verilere göre col değerlerini ayarla
      const colValuesFromBackend = firstFiveData.map((destination) => destination.col);
      setColValues(colValuesFromBackend);
      console.log(response.data.data)
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Öne çıkan turlar</span>
          <h2 className="section-title__title">En Popüler Turlar</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {data.map((data) => (
                  <SingleTour  data={data} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;
