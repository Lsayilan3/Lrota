import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import { useRouter } from "next/router";
import axios from "axios";

const NewsDetailsPage = () => {
  const router = useRouter();
  const { haberId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/haberlerCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedCategory = categoriesData.find(
    (category) => category.haberlerCategoryId === Number(haberId)
  );

  return (
    <section className="news-details">
      <Container>
        <Row>
          {selectedCategory && (
              <NewsDetailsLeft categories={selectedCategory} />
            )}
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
