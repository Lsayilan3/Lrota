import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsOne } from "@/data/tourDetailsPage";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;
  const { title, rate, duration, minAge, tourType, location, date } =
  tourDetailsOne;

const TourDetailsLeft = () => {
  const [active, setActive] = useState(1);

  return (
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
                    <span>${rate}</span> / Per Person
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
                        <h6>{duration}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <div className="text">
                        <p>Min Age</p>
                        <h6>{minAge}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tour Type</p>
                        <h6>{tourType}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
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
                        <p>Posted {date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{overview}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {faq.map(({ id, title, text, lists }) => (
            <div
              className={`accrodion overflow-hidden${
                active === id ? " active" : ""
              }`}
              key={id}
            >
              <div onClick={() => setActive(id)} className="accrodion-title">
                <h4>
                  <span>Day {id}</span> {title}
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === id ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{text}</p>
                  <ul className="list-unstyled">
                    {lists.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tour-details-two__related-tours">
   
      </div>
      <h3 className="tour-details-two__title review-scores__title">
        Review Scores
      </h3>
      <div className="tour-details__review-score">
        <div className="tour-details__review-score-ave">
          <div className="my-auto">
            <h3>{superb}</h3>
            <p>
              <i className="fa fa-star"></i> Super
            </p>
          </div>
        </div>
        <div className="tour-details__review-score__content">
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div>
      <ReviewForm reviews={reviews} />
    </div>
  );
};

export default TourDetailsLeft;
