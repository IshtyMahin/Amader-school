import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../Images/banner/banner1.png"
import banner2 from "../../../Images/banner/banner2.png"
import banner3 from "../../../Images/banner/banner3.png"



const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={'500px'}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={'500px'}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={'500px'}
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;