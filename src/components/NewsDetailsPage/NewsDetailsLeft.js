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
    message , userTreePhoto,  nameTree, messageTwo
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
  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={image.src} alt="" />
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
               aaa {totalComments} Comments
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
            <a href={href} key={id}>
              <i className={icon}></i>
            </a>
          ))}
        </div>


      </div>   <div className="author-one">
      <div className="author-one__image">
        <Image src="data:image/jpeg;base64,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" alt="" />
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
            <Image src="data:image/jpeg;base64,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" alt="" />
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
            <Image src="data:image/jpeg;base64,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" alt="" />
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
