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

  
  const {  textOne, textTwo, detayLeft, detayRight ,question, answer } =
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
  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        <Image src={image.src} alt="" />
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
                <p>{detayLeft}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRight}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeft}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRight}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeft}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRight}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeft}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRight}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{detayLeft}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{detayRight}</p>
              </div>
            </li>
   
        </ul>
      </div>
     
      <div class="destinations-details__faq" id="accordionPanelsStayOpenExample">
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      {question}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      {answer}
      </div>
    </div>
  </div>
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accrodion-grp faq-one-accrodion">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default DestinationsDetailsLeft;





// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Image } from "react-bootstrap";
// import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

// const DestinationsDetailsLeft = ({ categories }) => {
//   const { image, discoverTitle, textOne, textTwo, detayLeft, detayRight, question, answer  } =
//     categories || {};

//   const [categoriesData, setCategoriesData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://localhost:44375/WebAPI/api/hedefListCategories/getall")
//       .then((response) => {
//         setCategoriesData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="destinations-details__left">
//     <div className="destinations-details__img">
//       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqJiRfhMGpzmZrt6Cf1l7sfgV8T4F5ahZHg&usqp=CAU" alt="" />
//     </div>
//     <div className="destinations-details__discover">
//       <h3 className="destinations-details__title">{discoverTitle}</h3>

//         <p
         
//           className={`destinations-details__discover-text`}
//         >
//           {textOne}
//         </p>
//         <p
         
//          className={`destinations-details__discover-text`}
//        >
//          {textTwo}
//        </p>

//     </div>
//     <div className="destinations-details__overview">
//       <h3 className="destinations-details__title">overviewTitle</h3>
//       <ul className="list-unstyled destinations-details__overview-list">
     
//           <li>
//             <div className="destinations-details__overview-left">
//               <p>{detayLeft}</p>
//               <p>{question}</p>
//               <p>{detayLeft}</p>
//             </div>
//             <div className="destinations-details__overview-right">
//               <p>{detayRight}</p>
//               <p>{answer}</p>
//               <p>{detayRight}</p>
//             </div>
//           </li>
 
//       </ul>
//     </div>
//     {/* <DestinationsDetailsFaq faqs={faqs} /> */}
//   </div>
//   );
// };

// export default DestinationsDetailsLeft;