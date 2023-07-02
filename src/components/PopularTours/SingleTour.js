import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {

  const { populerId, suberb, rate, kacGun, yasOrani, hangiSehir } = tour || {};
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (populerId) {
          const response = await axios.get(`https://localhost:44375/WebAPI/api/enPopulerLists/getlist?populerId=${populerId}`);
          setSpots(response.data.data);
        } else {
          const response = await axios.get("https://localhost:44375/WebAPI/api/enPopulerLists/getall");
          setSpots(response.data);
        }
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [populerId]);

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src="https://www.kapadokyadavet.com/assets/img/aaimg/organr_300x300.jpg"
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {suberb} Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href="/tour-details">Tour Başlık Eklenecek</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>${rate}</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">

            <li >
              <Link href={`/tour-details/${populerId}`}>
                <a>
                  <span className="news-one__plus">{kacGun}</span>
                </a>
              </Link>


            </li>
            <li >
              <Link href={`/tour-details/${populerId}`}>
                <a>
                  <span className="news-one__plus">{yasOrani}</span>
                </a>
              </Link>
            </li>
            <li >
              <Link href={`/tour-details/${populerId}`}>
                <a>
                  <span className="news-one__plus">{hangiSehir}</span>
                </a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
