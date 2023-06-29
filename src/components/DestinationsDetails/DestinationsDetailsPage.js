// components/DestinationsDetails/DestinationsDetailsPage.js

import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";

import { useRouter } from "next/router";
import axios from "axios";

const DestinationsDetailsPage = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/hedefListCategories/getall")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="destinations-details">
      <Container>
        <Row>
          <Col>
          {
            categories.map((item)=>(
              <DestinationsDetailsLeft />
            ))
          }
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;
