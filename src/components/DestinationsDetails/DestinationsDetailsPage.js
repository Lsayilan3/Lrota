import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";

import { useRouter } from "next/router";
import axios from "axios";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/hedefListCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const selectedCategory = categoriesData.find(
    (category) => category.hedefListCategoryId === Number(categoryId)
  );
  return (
    <section className="destinations-details">
      <Container>
      {selectedCategory && (
              <DestinationsDetailsLeft categories={selectedCategory} />
            )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;