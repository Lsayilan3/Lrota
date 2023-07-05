import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image = "" ,data}) => {

  
  const { subTitle,title , photo, } = data || {};



  const photoUrl = "https://localhost:44375/WebAPI/";


  return (
    <li className="animated fadeInUp">
    <div className="gallery-one__img-box">
      <Image src={photoUrl + photo} alt={photo} />
      <div className="gallery-one__iocn">
        <a href={`@/images/gallery/${photo}`}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </li>
  );
};

export default SingleGallery;
