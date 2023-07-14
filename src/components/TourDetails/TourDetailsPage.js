import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";
import Preloader from "../Preloader/Preloader";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { populerId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.limitsizrota.com/api/enPopulerListtCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        setLoading(false);
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
      <Preloader loading={loading} />
      <Container>
      {selectedCategory && (
              <TourDetailsLeft photoUrl={photoUrl} data={selectedCategory} />
            )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;