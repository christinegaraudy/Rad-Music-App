import React from 'react';
import ImageUploader from 'react-images-upload';
// import Button from 'react-bootstrap/Button';

const ImageUpload = () => (
  <ImageUploader
    withIcon={false}
    buttonText="Choose images"
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
  />
);

export default ImageUpload;
