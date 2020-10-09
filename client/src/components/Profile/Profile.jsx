import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import profilepic from './sample_data/profilepic.jpg';
import PhotoCarousel from './PhotoCarousel';
import ImageUpload from './ImageUpload';

const Profile = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  // const [bio, setBio] = useState('');
  // const [status, setStatus] = useState('');
  // const [displayBio, setDisplayBio] = useState('');
  // const [displayStatus, setDisplayStatus] = useState('');
  // const [pictures, setPictures] = useState([]);

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
  // const onDrop = picture => {
  //   setPictures([...pictures, picture]);
  // };

  // need a function to grab saved bio and status from database when page loads
  // this doesn't work yet, but on the right track?
  // const getBio = () => {
  //   axios.get('/api/profile/bio')
  //     .then((response) => {
  //       console.log('DO WE SEE THIS?', response.data.bio);
  //       setBio(response.data.bio);
  //     });
  // };

  // useEffect(() => {
  //   console.log('should see bio or whatever');
  //   getBio();
  // }, [bio, getBio]);

  // const addBio = (data) => {
  //   axios.post('/api/profile/bio', { data })
  //     .then((response) => {
  //       console.log('addBio client side', response);
  //     })
  //     .catch((error) => {
  //       console.error('addBio client side error', error);
  //     });
  // };

  // const updateBio = (data) => {
  //   axios.post('/api/profile/bio', { data })
  //     .then((response) => {
  //       console.log('addBio client side', response);
  //     })
  //     .catch((error) => {
  //       console.error('addBio client side error', error);
  //     });
  // };

  // const addStatus = (data) => {
  //   axios.post('/api/profile/status', { data })
  //     .then((response) => {
  //       console.log('addBio client side', response);
  //     })
  //     .catch((error) => {
  //       console.error('addStatus client side error', error);
  //     });
  // };

  // const updateStatus = (data) => {
  //   axios.post('/api/profile/status', { data })
  //     .then((response) => {
  //       console.log('addBio client side', response);
  //     })
  //     .catch((error) => {
  //       console.error('addStatus client side error', error);
  //     });
  // };

  const imgStyle = {
    height: 150,
    width: 150,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '20px',
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
              <img src={image} style={imgStyle} alt="profile" />
            )}
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
          </div>
          {/* <img src={profilepic} alt="cat in vest" style={imgStyle} /> */}
          {/* <ImageUpload onChange={onDrop} /> */}
          {/* <div
            className="bio"
            style={{
              height: 100,
              width: 250,
              border: '1px solid #000',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {displayBio}
          </div> */}
          {/* <Form className="bio-form" style={{ marginTop: 10 }}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
            </Form.Group>
          </Form>
          <Button
            variant="outline-success"
            size="sm"
            block
            onClick={(e) => {
              e.preventDefault();
              setDisplayBio(bio);
              setBio('');
              addBio(bio);
              // updateBio(bio);
            }}
          >
            Update Bio
          </Button> */}
          <div className="calendar" style={calStyle}> Calendar </div>
        </Col>
        <Col md={8}>
          {/* <div
            className="status"
            style={{
              height: 100,
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 25,
              marginBottom: 10,
              border: '1px solid #000',
            }}
          >
            {displayStatus}
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />
            </Form.Group>
          </Form>
          <Button
            variant="outline-success"
            size="sm"
            block
            onClick={(e) => {
              e.preventDefault();
              setDisplayStatus(status);
              setStatus('');
              addStatus(status);
              // updateStatus(status);
            }}
          >
            Update Status
          </Button> */}
          <PhotoCarousel />
          {/* <ImageUpload onChange={onDrop} /> */}
        </Col>
      </Row>
    </div>

  );
};

export default Profile;
