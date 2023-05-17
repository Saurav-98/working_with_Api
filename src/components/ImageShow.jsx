import React from "react";

const ImageShow = ({ image }) => {
  console.log();
  return (
    <div className="image-box">
      <img
        className="image"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageShow;
