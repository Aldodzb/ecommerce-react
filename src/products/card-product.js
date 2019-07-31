import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import "./card-product.css";

export default function Products() {
  var responseFromBackend = [
    {
      title: "product1",
      description: "Description lorem 1",
      imageUrl: ""
    },
    {
      title: "product2",
      description: "Description lorem 2",
      imageUrl: ""
    },
    {
      title: "product3",
      description: "Description lorem 3",
      imageUrl: ""
    },
    {
      title: "product4",
      description: "Description lorem 4",
      imageUrl: ""
    }
  ];
  return (
    <div>
      <div id="container">
        {responseFromBackend.map(el => (
          <Card id="cards">
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>{el.title}</CardTitle>
              <p>{el.description}</p>
              <Button>More &rarr;</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
