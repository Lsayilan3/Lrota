import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ data, col }) => {
  const { categoryId, photo, title,tours } = data || {};

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categoryId) {
          const response = await axios.get(`https://api.limitsizrota.com/api/hedefLists/getlist?categoryId=${categoryId}`);
          setSpots(response.data.data);
        } else {
          const response = await axios.get("https://api.limitsizrota.com/api/hedefLists/getall");
          setSpots(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryId]);

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
        <Image src={photoUrl + photo} alt={photo} />
          <div className="destinations-one__content">
            <p className="destinations-one__sub-title">{tours}</p>
            <h2 className="destinations-one__title">
              <Link href={`/destinations-details/${categoryId}`} passHref>
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
