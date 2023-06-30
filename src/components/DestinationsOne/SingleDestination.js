import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ data, detay }) => {
  const { categoryId, photo, title } = data || {};

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categoryId) {
          const response = await axios.get(`https://localhost:44375/WebAPI/api/hedefLists/getlist?categoryId=${categoryId}`);
          setSpots(response.data.data);
        } else {
          const response = await axios.get("https://localhost:44375/WebAPI/api/hedefLists/getall");
          setSpots(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [categoryId]);
  const getApiUrlPhoto = "https://api.kapadokyadavet.com";


  return (
    <Col xl={detay} lg={detay}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
        <Image src={getApiUrlPhoto + photo} alt="" />

          <div className="destinations-one__content">
            <p className="destinations-one__sub-title">{title}</p>
            <h2 className="destinations-one__title">
              <Link href={`/${categoryId}`} passHref>
                <a>{title}</a>
              </Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href="">tours</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
