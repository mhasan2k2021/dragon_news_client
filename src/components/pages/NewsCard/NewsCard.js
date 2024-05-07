import React from "react";
import "./NewsCard.css";
import { FaBookmark, FaShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { author, details, image_url, title, _id } = news;
  return (
    <div className="card-container mb-3">
      <div className="author-details-container d-flex justify-content-between align-items-center">
        <div className="author-details d-flex align-items-center">
          <img className="me-2" src={author?.img} alt={author?.name}></img>
          <div className="name-details">
            <h6>{author?.name}</h6>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark></FaBookmark>
          <FaShareNodes></FaShareNodes>
        </div>
      </div>
      <div className="news-container">
        <h2>{title}</h2>
        <img src={image_url} alt={title}></img>
        <div>
          {details?.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
