import newsDetailsPage from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
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

const NewsDetailsLeft = ({categories,detayy}) => {
  const router = useRouter();
  const { haberId } = router.query;

  
  const {  textOne, textTwo, textTree,textFour} = categories || {};
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/haberlerCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const selectedCategory = categoriesData.find(
   (category) => category.hedefListCategoryId === Number(haberId)
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
            <a href={href} key={id}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <AuthorOne author={authorData} />
      <CommentOne comments={comments} />
      <CommentForm />
    </div>
  );
};

export default NewsDetailsLeft;
