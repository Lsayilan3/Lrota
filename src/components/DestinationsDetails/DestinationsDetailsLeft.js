// components/DestinationsDetails/DestinationsDetailsLeft.js

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-bootstrap";

const DestinationsDetailsLeft = ({ dataa }) => {
  const { image, discoverTitle, textOne, textTwo, textThree, detailLeft, detailRight } = dataa || {};

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
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        <Image src={image} alt="" />
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">{discoverTitle}</h3>
        <p>{textOne}a</p>
        <p>{textTwo}a</p>
        <p>{textThree}a</p>
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">Overview</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          <li>
            <div className="destinations-details__overview-left">
              <p>{detailLeft}</p>
            </div>
          </li>
          <li>
            <div className="destinations-details__overview-right">
              <p>{detailRight}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DestinationsDetailsLeft;
