import { tourDetailsOne } from "@/data/tourDetailsPage";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";



const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({ data }) => {

  const router = useRouter();
  const { populerId } = router.query;
  const [active, setActive] = useState(1);
  const { title, rate, duration, minAge, tourType, location, date, superb, overviewListOne, overviewListTwo,
    overviewListTree, overviewListFour, overviewListFive, overviewListSix, overviewListSeven, overviewListEight, titleTwo, textTwo,
    titleTree, textTree, titleFour, textFour, hizmetler, hizmetlerPuan, konum, konumPuan, kolayliklar, kolayliklarPuan,
    fiyat, fiyatPuan, yiyecek, yiyecekPuan, categoryName, map, genel, photoBir, photoIki, photoUc } = data || {};
  const apiUrl = "https://api.limitsizrota.com/enPopulerListCategories";
  const [dataa, setDataa] = useState([]);


  useEffect(() => {
    axios
      .get("https://api.limitsizrota.com/enPopulerListtCategories/getall")
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedCategory = dataa.find(
    (category) => category.EnPopulerListCategoryId === Number(populerId)
  );

  if (!dataa || dataa.length === 0) {
    return <div>Loading...</div>;
  }

  const photoUrl = "https://api.limitsizrota.com";
  
  return (
    <>
      <div className="destinations-details__left">
        <div className="destinations-details__img">
          <div className="tour-details-two__left">
            <section className="tour-details">
              <div className="tour-details__top">
                <Container>
                  <Row>
                    <Col xl={12}>
                      <div className="tour-details__top-inner">
                        <div className="tour-details__top-left">
                          <h2 className="tour-details__top-title">{title}</h2>
                          <p className="tour-details__top-rate">
                            <span>₺{rate}</span> / Kişi Başına
                          </p>
                        </div>
                        <div className="tour-details__top-right">
                          <ul className="list-unstyled tour-details__top-list">
                            <li>
                              <div className="icon">
                                <span className="icon-clock"></span>
                              </div>
                              <div className="text">
                                <p>Süre</p>
                                <h6>{duration}</h6>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-user"></span>
                              </div>
                              <div className="text">
                                <p>Asgari Yaş</p>
                                <h6>{minAge}</h6>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-plane"></span>
                              </div>
                              <div className="text">
                                <p>Tur Türü</p>
                                <h6>{tourType}</h6>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-place"></span>
                              </div>
                              <div className="text">
                                <p>Konum</p>
                                <h6>{location}</h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Row className="mb-4">
                <Col xs={4}>
                  <Image src={photoUrl + photoIki} alt={photoIki || ""} />
                </Col>
                <Col xs={4}>
                  <Image src={photoUrl + photoUc} alt={photoUc || ""} />
                </Col>
                <Col xs={4}>
                  <Image src={photoUrl + photoBir} alt={photoBir || ""} />
                </Col>
              </Row>

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
                                <p>Gönderildi {date}</p>
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
                  <div style={{ paddingTop: 30 }} className="tour-details-two__overview">
                    <h2  className="tour-details-two__title">Genel Bakış</h2>
                    <p className="tour-details-two__overview-text">{genel}</p>
                    <div className="tour-details-two__overview-bottom">
                      <h2 style={{color:"gray"}} className="tour-details-two-overview__title">Dahil/Hariç</h2>
                      <div className="tour-details-two__overview-bottom-inner">
                        <div className="tour-details-two__overview-bottom-left">
                          <ul className="list-unstyled tour-details-two__overview-bottom-list">

                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListOne}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListTwo}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListTree}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListFour}</p>
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
                                <p>{overviewListFive}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListSix}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListSeven}</p>
                              </div>
                            </li>
                            <li >
                              <div className="icon">
                                <i className="fa fa-check"></i>
                              </div>
                              <div className="text">
                                <p>{overviewListEight}</p>
                              </div>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingBottom: 50 }} className="tour-details-two__tour-plan">
                    <h2 className="tour-details-two__title">Tur Planı</h2>
                    <div class="destinations-details__faq" id="accordionPanelsStayOpenExample">
                      <div class="accrodion-grp faq-one-accrodion">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {titleTwo}
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                          <div class="accordion-body">
                            {textTwo}
                          </div>
                        </div>
                      </div>
                      <div class="accrodion-grp faq-one-accrodion">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                            {titleTree}
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                          <div class="accordion-body">
                            {textTree}
                          </div>
                        </div>
                      </div>
                      <div class="accrodion-grp faq-one-accrodion">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            {titleFour}
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body">
                            {textFour}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div style={{ paddingBottom: 50 }} className="tour-details-two__location">
                    <h2 style={{color:"gray"}} className="tour-details-two__title">Tur Konum</h2>
                    <iframe
                      src={map}
                      className="tour-details-two__location-map"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="tour-details-two__related-tours">

                  </div>
                  <h3 className="tour-details-two__title review-scores__title">
                    İnceleme Puanları
                  </h3>
                  <div style={{ marginBottom: 100, }} className="tour-details__review-score">
                    <div className="tour-details__review-score-ave">
                      <div className="my-auto">
                        <h3 style={{marginLeft: 4}}>{superb}</h3>
                        <p>
                          <i className="fa fa-star"></i> Mükemmel

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
        </div>
      </div>

    </>
  );
};

export default TourDetailsLeft;
