import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div className="mt-3 d-flex flex-column justify-content-center">
      <h3>this Home page.{allNews.length} </h3>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
