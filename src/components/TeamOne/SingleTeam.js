import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTeam = ({ data }) => {

  const { name, title, photo, hrefBir, hrefIki, hrefUc } = data || {};

  const photoUrl = "https://localhost:44375/WebAPI/";

  return (
    <Col xl={3} lg={6} md={6} className="animated fadeInLeft">
      <div className="team-one__single">
        <div className="team-one__img">
          <Image src={photoUrl + photo} alt="" />
        </div>
        <div className="team-one__content">
          <h4 className="team-one__name">{name}</h4>
          <p className="team-one__title">{title}</p>
          <div className="team-one__social">
            <a href={hrefBir} >
              <i className="fab fa-facebook"></i>
            </a>
            <a href={hrefIki} >
              <i className="fab fa-twitter"></i>
            </a>
            <a href={hrefUc} >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeam;
