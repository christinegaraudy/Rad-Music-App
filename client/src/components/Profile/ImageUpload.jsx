import React from 'react';
import Button from 'react-bootstrap/Button';

const ImageUpload = () => (
  <div className="upload-button">
    <Button 
      type="submit"
      variant="outline-primary"
      size="sm"
    >
      Upload New Photo
    </Button>
  </div>
);

export default ImageUpload;
