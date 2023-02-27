import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="img1.png" alt="" style={{ width: 164, height: 149 }} />
      </div>
      <div>
        <img src="img2.png" alt="" style={{ width: 164, height: 149 }} />
      </div>
      <div>
        <img src="img3.png" alt="" style={{ width: 164, height: 149 }} />
      </div>
      <div>
        <img src="img1.png" alt="" style={{ width: 164, height: 149 }} />
      </div>
    </Slider>
  );
}
