import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import axios from "axios";

const DestinationsOne = () => {
  const apiUrl = "https://localhost:44375/WebAPI/api/hedefLists";

  const [data, setData] = useState([]);

  const colValues = [3, 6, 3, 6, 6, 3];

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
      console.log(response.data);
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
              col={colValues[index % colValues.length]}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
