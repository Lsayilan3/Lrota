import galleryOne from "@/data/galleryOne";
import React from "react";
import SingleGallery from "./SingleGallery";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

const { bg, galleryData } = galleryOne;

const GalleryOne = () => {
  const apiUrl = "https://api.limitsizrota.com/api/mediaPhotoes";

  const [data, setData] = useState([]);;
  const [loading, setLoading] = useState(true);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("API çekme hatası ne", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  return (
    <section className="gallery-one">
      <Preloader loading={loading} />
      <div
        className="gallery-one-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="gallery-one__container-box clearfix">
        <ul className="list-unstyled gallery-one__content clearfix">
          {data.map((data) => (
            <SingleGallery key={data.mediaPhotoId} data={data} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryOne;
