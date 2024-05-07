import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const OneNews = () => {
  const news = useLoaderData();
  const { details, image_url, title, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Header style={{ fontSize: "30px", fontWeight: "800" }}>
            {title}
          </Card.Header>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Link to={`/category/${category_id}`}>Back</Link>
      </Card>
    </div>
  );
};

export default OneNews;
