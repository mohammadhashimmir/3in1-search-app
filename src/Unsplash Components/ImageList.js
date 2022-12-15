import React from "react";
import "./imageStyle.css"
import ImageCard from './ImageCard';

const ImageList =({images}) => {
  const RenderedImages =images.map(image => {
    return <ImageCard
     key={image.id}
     image={image}
      />;
  });
  return <div className="image-list">{RenderedImages}</div>;
};

export default ImageList;

