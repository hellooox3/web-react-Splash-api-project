import React from "react";
import "../css/ImageList.css";
import ImageCard from "./ImageCard";
// class ImageList extends React.Component {}
const ImageList = props => {
  // console.log(props.images);
  // return <div>ImageList</div>;
  // return(
  const images = props.images.map(image => {
    return (
      // <img key={image.id} src={image.urls.small} alt={image.description} />
      <ImageCard key={image.id} image={image} />
    );
  });
  // );
  return <div className="image-list">{images}</div>;
};

export default ImageList;
