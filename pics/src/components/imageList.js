import './ImageList.css';
import ImageCard from './image-card';
import React from "react";
const ImageList = (props) => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image = {image}/>;
  }); 

  return (
    <div className = "image-list">
      Found {images.length} Images{images}
    </div>
  );
};
export default ImageList;
