import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import axios from "axios";

const DestinationsOne = () => {
  const apiUrl = "https://api.kapadokyadavet.com/api/orAcilises";

  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      const firstFiveData = response.data.slice(0, 5); // İlk 5 veriyi al
      setData(firstFiveData);

      // Backend'den gelen verilere göre col değerlerini ayarla
      const colValuesFromBackend = firstFiveData.map((destination) => destination.detay);
      setColValues(colValuesFromBackend);
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  const getApiUrlPhoto = "https://api.kapadokyadavet.com";
  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Hedef Listeleri</span>
          <h2 className="section-title__title">Benzersiz Rotaları Keşfet</h2>
        </div>
        <Row className="masonary-layout">
          {data.map((destination, index) => (
            <SingleDestination
              key={destination.id}
              data={destination}
              detay={colValues[index]}
              getApiUrlPhoto={getApiUrlPhoto}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
