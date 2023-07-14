import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { populerId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.limitsizrota.com/api/enPopulerListtCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedCategory = categoriesData.find(
    (category) => category.enPopulerListtCategoryId === Number(populerId)
  );

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <section className="destinations-details">
      <Container>
      {selectedCategory && (
              <TourDetailsLeft photoUrl={photoUrl} data={selectedCategory} />
            )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;