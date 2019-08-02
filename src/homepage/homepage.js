import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBCol,
  MDBCardImage
} from "mdbreact";
import "./homepage.css";

export default function HomePage() {
  return (
    <div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          style={{ marginTop: "1rem" }}
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={"images/products1.png"}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={"images/products2.png"}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={"images/products3.png"}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>

      <MDBContainer>
        <MDBCard
          className="card-body"
          style={{ width: "100%", marginTop: "2rem", "margin-bottom": "40px" }}
        >
          <MDBCardTitle>Recently Viewed</MDBCardTitle>
          <MDBCardText>
            Here are some hot offers based on your recent viewed items
          </MDBCardText>
          <MDBCol>
            <MDBCard
              style={{
                width: "22rem",
                display: "inline-block"
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>That product</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn>View the product</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard
              style={{
                width: "22rem",
                display: "inline-block",
                "margin-left": "10px"
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>That product 2</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn>View the product</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
