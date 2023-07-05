import { tourDetailsOne } from "@/data/tourDetailsPage";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import axios from "axios";
import { useEffect } from "react";


const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsPage = () => {
  const [active, setActive] = useState(1);
  // const { title, rate, duration, minAge, tourType, location, date, superb, overviewListOne, overviewListTwo,
  //   overviewListTree, overviewListFour, overviewListFive, overviewListSix, overviewListEight, titleTwo, textTwo,
  // titleTree, textTree, titleFour, textFour, hizmetler, hizmetlerPuan, konum, konumPuan, kolayliklar, kolayliklarPuan,
  //  fiyat, fiyatPuan, yiyecek, yiyecekPuan, } = data || {};
  const apiUrl = "https://localhost:44375/WebAPI/api/enPopulerListCategories";
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + "/getAll");
        setDataa(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("API çekme hatası:", error);
      }
    };

    fetchData();
  }, []);
  if (!dataa || dataa.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="tour-details-two__left">
        <section className="tour-details">
          <div className="tour-details__top">
            <Container>
              <Row>
                <Col xl={12}>
                  <div className="tour-details__top-inner">
                    <div className="tour-details__top-left">
                      <h2 className="tour-details__top-title">{dataa[0].title}</h2>
                      <p className="tour-details__top-rate">
                        <span>${dataa[0].rate}</span> / Per Person
                      </p>
                    </div>
                    <div className="tour-details__top-right">
                      <ul className="list-unstyled tour-details__top-list">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>Duration</p>
                            <h6>{dataa[0].duration}</h6>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-user"></span>
                          </div>
                          <div className="text">
                            <p>Min Age</p>
                            <h6>{dataa[0].minAge}</h6>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-plane"></span>
                          </div>
                          <div className="text">
                            <p>Tour Type</p>
                            <h6>{dataa[0].tourType}</h6>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-place"></span>
                          </div>
                          <div className="text">
                            <p>Location</p>
                            <h6>{dataa[0].location}</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="tour-details__bottom">
            <Container>
              <Row>
                <Col xl={12}>
                  <div className="tour-details__bottom-inner">
                    <div className="tour-details__bottom-left">
                      <ul className="list-unstyled tour-details__bottom-list">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>Posted {dataa[0].date}</p>
                          </div>
                        </li>
                        {/* <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li> */}
                      </ul>
                    </div>
                    <div className="tour-details__bottom-right">
                      <a href="/contact">
                        <i className="fas fa-share"></i>iletişim
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details-two__overview">
                <h3 className="tour-details-two__title">Genel Bakış</h3>
                <p className="tour-details-two__overview-text">{dataa[0].categoryName}</p>
                <div className="tour-details-two__overview-bottom">
                  <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
                  <div className="tour-details-two__overview-bottom-inner">
                    <div className="tour-details-two__overview-bottom-left">
                      <ul className="list-unstyled tour-details-two__overview-bottom-list">

                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListOne}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListTwo}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListTree}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListFour}</p>
                          </div>
                        </li>

                      </ul>
                    </div>
                    <div className="tour-details-two__overview-bottom-right">
                      <ul className="list-unstyled tour-details-two__overview-bottom-right-list">

                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListFive}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListSix}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListSeven}</p>
                          </div>
                        </li>
                        <li >
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>{dataa[0].overviewListEight}</p>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 100 }} className="tour-details-two__tour-plan">
                <h3 className="tour-details-two__title">Tur Planı</h3>
                <div class="destinations-details__faq" id="accordionPanelsStayOpenExample">
                  <div class="accrodion-grp faq-one-accrodion">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {dataa[0].titleTwo}
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div class="accordion-body">
                        {dataa[0].textTwo}
                      </div>
                    </div>
                  </div>
                  <div class="accrodion-grp faq-one-accrodion">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        {dataa[0].titleTree}
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        {dataa[0].textTree}
                      </div>
                    </div>
                  </div>
                  <div class="accrodion-grp faq-one-accrodion">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        {dataa[0].titleFour}
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body">
                        {dataa[0].textFour}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div style={{ marginBottom: 140 }} className="tour-details-two__location">
                <h3 className="tour-details-two__title">Tur Planı</h3>
                <iframe
                  src={dataa[0].map}
                  className="tour-details-two__location-map"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="tour-details-two__related-tours">

              </div>
              <h3 className="tour-details-two__title review-scores__title">
                İnceleme Puanları
              </h3>
              <div style={{ marginBottom: 100 }} className="tour-details__review-score">
                <div className="tour-details__review-score-ave">
                  <div className="my-auto">
                    <h3></h3>
                    <p>
                      <i style={{fontSize:32, cursor:"pointer"}} className="fa fa-star"></i>
                      <i style={{fontSize:32, cursor:"pointer"}} className="fa fa-star"></i>
                      <i style={{fontSize:32, cursor:"pointer"}} className="fa fa-star"></i>
                      <i style={{fontSize:32, cursor:"pointer"}} className="fa fa-star"></i>
                      <i style={{fontSize:32, cursor:"pointer"}} className="fa fa-star"></i>                 
                    </p>
                  </div>
                </div>
                <div className="tour-details__review-score__content">
                  <ReviewScoreBar />
                </div>
              </div>
              <ReviewForm reviews={reviews} />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default TourDetailsPage;
