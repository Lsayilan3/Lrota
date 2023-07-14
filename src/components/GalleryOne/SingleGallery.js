import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ( {data} ) => {

  const {  photo } = data || {};

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <li className="animated fadeInUp">
    <div className="gallery-one__img-box">
      <Image src={photoUrl + photo} alt={photo} />
      <div className="gallery-one__iocn">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/limitsiz_rota/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </li>
  );
};

export default SingleGallery;
