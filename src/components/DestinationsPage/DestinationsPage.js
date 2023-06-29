import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";
import axios from "axios";

const DestinationsPage = () => {
  const apiUrl = "https://localhost:44375/WebAPI/api/hedefListCategories";

  const [data, setData] = useState([]);

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

  const colValues = [3, 6, 3, 6, 6, 3];

  const getApiUrlPhoto = "https://api.kapadokyadavet.com";

  return (
    <section className="destinations-one destinations-page">
      <Container>
        <Masonry className="row position-relative">
          {data.map((destination, index) => (
            <SingleDestination
              key={destination.id}
              data={destination}
              col={colValues[index % colValues.length]}
              getApiUrlPhoto={getApiUrlPhoto}
            />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default DestinationsPage;
