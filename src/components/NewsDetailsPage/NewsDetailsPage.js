import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import Sidebar from "./Sidebar";

const NewsDetailsPage = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col>
            <NewsDetailsLeft />
          </Col>
       
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
