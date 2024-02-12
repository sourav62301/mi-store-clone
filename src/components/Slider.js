import React from "react";
// eslint-disable-next-line
import { Carousel } from "react-bootstrap";
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ start }) {
  return (
    <Carousel fade>
      {start.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="First Slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
