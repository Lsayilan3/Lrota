import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";



const SingleTestimonial = ({ data }) => {

  const { description, review, name, role } = data || {};

  const apiUrl = "https://localhost:44375/WebAPI/api/hikayelers";

  const [dataa, setDataa] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setDataa(response.data);
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  return (
    <div>
      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <div className="testimonial-one__img">
          <Image src="" alt="" />
        </div>
        <div className="testimonail-one__content">
          <div className="testimonial-one__top-revivew-box">
            {Array.from(Array(review)).map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
          <p className="testimonial-one__text">{description}</p>
          <div className="testimonial-one__client-info">
            <h3 className="testimonial-one__client-name">{name}</h3>
            <p className="testimonial-one__client-title">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
