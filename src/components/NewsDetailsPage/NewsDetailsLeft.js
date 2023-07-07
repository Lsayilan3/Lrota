import newsDetailsPage from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import AuthorOne from "./AuthorOne";
import CommentForm from "./CommentForm";
import CommentOne from "./CommentOne";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const {
  image,
  date,
  author,
  totalComments,
  title,
  texts,
  tags,
  socials,
  authorData,
  comments,
} = newsDetailsPage;

const NewsDetailsLeft = ({categories}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  }

  const router = useRouter();
  const { haberId } = router.query;

  
  const {  textOne, textTwo, textTree,textFour,totalComments,title, userPhoto, name, description , userTwoPhoto, nameTwo,
    message , userTreePhoto,  nameTree, messageTwo,photo
  } = categories || {};
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/haberlerCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const selectedCategory = categoriesData.find(
   (category) => category.haberlerCategoryId === Number(haberId)
 );

 const photoUrl = "https://localhost:44375/WebAPI/";
  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={photoUrl + photo} alt={photo || ""}  />
        <div className="news-one__date">
          <p>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-user-circle"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-comments"></i>
                {totalComments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>
     
          <p  className="news-details__text">
            {textOne}
          </p>
          <p  className="news-details__text">
            {textTwo}
          </p>
          <p  className="news-details__text">
            {textTree}
          </p>
          <p  className="news-details__text">
            {textFour}
          </p>
     
      </div>
      <div className="news-details__bottom">
        <p className="news-details__tags">
          <span></span>
        
          
        </p>
        <div className="news-details__social-list">
          {socials.map(({ id, icon, href }) => (
            <a href={href} target="_blank" key={id}>
              <i className={icon}></i>
            </a>
          ))}
        </div>


      </div>   <div className="author-one">
      <div className="author-one__image">
        <Image src={photoUrl + userPhoto} alt={userPhoto || ""} />
      </div>
      <div className="author-one__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>

    <div className="comment-one">
      <h3 className="comment-one__title">{comments.length} Comments</h3>
     
        <div className="comment-one__single" >
          <div className="comment-one__image">
            <Image src={photoUrl + userTwoPhoto} alt={userTwoPhoto || ""} />
          </div>
          <div className="comment-one__content">
            <h3>{nameTwo}</h3>
            <p>{message}</p>
            <a href="#" className="thm-btn comment-one__btn">
              Reply
            </a>
          </div>
        </div>

        <div className="comment-one__single" >
          <div className="comment-one__image">
            <Image src={photoUrl + userTreePhoto} alt={userTreePhoto || ""}  />
          </div>
          <div className="comment-one__content">
            <h3>{nameTree}</h3>
            <p>{messageTwo}</p>
            <a href="#" className="thm-btn comment-one__btn">
              Reply
            </a>
          </div>
        </div>

    </div>
    <div className="comment-form">
      <h3 className="comment-form__title">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="comment-one__form">
        <Row>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="text" placeholder="Your name" name="name" />
            </div>
          </Col>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="email" placeholder="Email address" name="email" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="comment-form__input-box">
              <textarea name="message" placeholder="Write Comment"></textarea>
            </div>
            <button type="submit" className="thm-btn comment-form__btn">
              Submit Comment
            </button>
          </Col>
        </Row>
      </form>
    </div>
    </div>
  );
};

export default NewsDetailsLeft;
