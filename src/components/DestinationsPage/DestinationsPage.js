import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";
import axios from "axios";

const DestinationsPage = () => {
  const apiUrl = "https://api.kapadokyadavet.com/api/orAcilises";

  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);

      // Backend'den gelen verilere göre col değerlerini ayarla
      const colValuesFromBackend = response.data.map((destination) => destination.detay);
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
    <section className="destinations-one destinations-page">
 
      <Container>
        <Masonry className="row position-relative">
          {data.map((destination, index) => (
            <SingleDestination
            key={destination.id}
            data={destination}
            detay={colValues[index]}
            getApiUrlPhoto={getApiUrlPhoto}
          />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default DestinationsPage;
