import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";


import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { populerId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/enPopulerListCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const selectedCategory = categoriesData.find(
    (category) => category.enPopulerListCategoryId === Number(populerId)
  );
  return (
    <section className="destinations-details">
      <Container>
      {selectedCategory && (
              <TourDetailsLeft data={selectedCategory} />
            )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;