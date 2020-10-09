import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PhotoItem from './PhotoItem';
import ImageUpload from './ImageUpload';
import first from './sample_data/first.jpg';
import second from './sample_data/second.jpg';
import third from './sample_data/third.png';
import four from './sample_data/four.jpg'

const photoArray = [
  first,
  second,
  third,
  four,
];

const PhotoCarousel = () => (

  <Carousel
    className="photo-carousel"
    style={{
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    {photoArray.map((photo) => (
      <Carousel.Item>

        <PhotoItem photo={photo} />

      </Carousel.Item>
    ))}
  </Carousel>
);

export default PhotoCarousel;
