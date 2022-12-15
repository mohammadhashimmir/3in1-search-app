import React, {useState, useEffect, useRef} from 'react';

const ImageCard=({image})=>{
const [spans, setSpans]=useState({ spans: 0 });
const imageRef=useRef();

useEffect(()=>{
  imageRef.current.addEventListener('load',()=>{
    const height = imageRef.current.clientHeight;
    const span = Math.ceil(height/10);
    setSpans(span);  
  });
},[]);

const { description, urls } =image;

return (
  <div style={{ gridRowEnd: `span ${spans}` }}>
    <img ref={imageRef} alt={description} src={urls.regular} />
  </div>
);
  
};

export default ImageCard;
