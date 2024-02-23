import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem } from "react-bootstrap";

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.end.map((item, index) => (
        <CarouselItem
          key={item.image}
          id="banner"
          interval={1000}
          keyboard={true}
        >
          <img
            className="d-block w-100"
            id="bannerImage"
            src={item.image}
            alt={`${index} banner`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Banner;
