import React from "react";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import "./card-product.css";
import { connect } from "react-redux";

export function Products(props) {
  var responseFromBackend = props.products;
  return (
    <div>
      <div id="container">
        {responseFromBackend.map(prod => (
          <Card id="cards">
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>{prod.title}</CardTitle>
              <p>{prod.description}</p>
              <Button>$ {prod.price}</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Products);
