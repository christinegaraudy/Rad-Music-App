import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import profilepic from './sample_data/profilepic.jpg';
import PhotoCarousel from './PhotoCarousel';

const Profile = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'radmapics');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/radma/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  const getImage = () => {

  };

  const saveImage = () => {

  };

  const imgStyle = {
    height: 250,
    width: 250,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '20px',
    border: '2px solid #000',
    borderRadius: '5px',
  };

  const calStyle = {
    height: 250,
    width: 250,
    border: '2px solid #000',
    borderRadius: '5px',
    margin: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (

    <div as={Container}>
      <Row>
        <Col sm={4}>
          <div>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <img src={image} style={imgStyle} alt="upload profile pic" />
            )}
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
              onClick={saveImage}
            />
          </div>
          <div className="calendar" style={calStyle}> Calendar </div>
        </Col>
        <Col md={8}>
          <PhotoCarousel />
        </Col>
      </Row>
    </div>

  );
};

export default Profile;
