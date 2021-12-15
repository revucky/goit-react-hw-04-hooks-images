import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

import React from "react";
// import PropTypes from "prop-types";

const ImageGallery = ({ img, modalO, largeUrl }) => {
  return (
    <ul className={s.ImageGallery}>
      {img.map(({ webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          openLarge={largeUrl}
          openModal={modalO}
          key={id}
          src={webformatURL}
          srcLarge={largeImageURL}
        />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   img: PropTypes.array,
// };

export default ImageGallery;
