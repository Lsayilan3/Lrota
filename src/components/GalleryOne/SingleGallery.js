import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ( {data} ) => {

  const {  photo } = data || {};

  const photoUrl = "https://localhost:44375/WebAPI/";

  return (
    <li className="animated fadeInUp">
    <div className="gallery-one__img-box">
      <Image src={photoUrl + photo} alt={photo} />
      <div className="gallery-one__iocn">
        <a target="_blank" href="https://www.instagram.com/limitsiz_rota/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </li>
  );
};

export default SingleGallery;
