import React from "react";

const ImageShow = ({ image }) => {
  console.log();
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
