import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ data, col }) => {
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

  // Backendde col modeli

  return (
    <Col xl={col} lg={col}>
    <div className="destinations-one__single">
      <div className="destinations-one__img">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqJiRfhMGpzmZrt6Cf1l7sfgV8T4F5ahZHg&usqp=CAU" alt="" />
        <div className="destinations-one__content">
          <p className="destinations-one__sub-title">{title}nnn</p>
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
