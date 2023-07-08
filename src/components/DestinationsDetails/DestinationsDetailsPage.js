import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";
import { useRouter } from "next/router";
import axios from "axios";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/hedefListtCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Api Çekme Hatası Hedeflist Category",error);
      });
  }, []);

  const selectedCategory = categoriesData.find(
    (category) => category.hedefListtCategoryId === Number(categoryId)
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