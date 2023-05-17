import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <ImageShow image={image} />
      ))}
    </div>
  );
};

export default ImageList;
