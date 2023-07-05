import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React from "react";
import { Image } from "react-bootstrap";
import DestinationsDetailsFaq from "./DestinationsDetailsFaq";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const { image, discoverTitle, texts, overviewTitle, overviews, faqs } =
  destinationsDetailsLeft;


const DestinationsDetailsLeft = ({categories,detayy}) => {
  const router = useRouter();
  const { categoryId } = router.query;

  
  const {  textOne, textTwo, detayLeftOne, detayRightOne ,detayLeftTwo, detayRightTwo ,detayLeftTree, detayRightTree ,
    detayLeftFour, detayRightFour ,detayLeftFive, detayRightFive ,questionOne, answerOne,questionTwo, answerTwo, 
    questionTree, answerTree,photo} =
     categories || {};

     const [categoriesData, setCategoriesData] = useState([]);

       useEffect(() => {
         axios
           .get("https://localhost:44375/WebAPI/api/hedefListCategories/getall")
           .then((response) => {
             setCategoriesData(response.data);
             console.log(response.data);
           })
           .catch((error) => {
             console.log(error);
           });
       }, []);
       const selectedCategory = categoriesData.find(
        (category) => category.hedefListCategoryId === Number(categoryId)
      );

      const photoUrl = "https://localhost:44375/WebAPI/";
  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        <Image src={photoUrl + photo} alt={photo || ""} />
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">Discover Spain</h3>

          <p
       
            className="destinations-details__discover-text"
          >
            {textOne}
          </p>
          <p
       
            className="destinations-details__discover-text"
          >
            {textTwo}
          </p>
 
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">Overview</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeftOne}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRightOne}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeftTwo}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRightTwo}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeftTree}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRightTree}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeftFour}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRightFour}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeftFive}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRightFive}</p>
              </div>
            </li>
   
        </ul>
      </div>
     
      <div class="destinations-details__faq" id="accordionPanelsStayOpenExample">
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      {questionOne}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      {answerOne}
      </div>
    </div>
  </div>
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
      {questionTwo}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      {answerTwo}
      </div>
    </div>
  </div>
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      {questionTree}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      {answerTree}
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default DestinationsDetailsLeft;

