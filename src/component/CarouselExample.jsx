import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/**
 * @typedef CarouselExample - Tạo slider kiểu carousel
 * @returns
 */

/**
 * @property {Array} images - Danh sách các ảnh trong silder
 * @property {Number} id - ID của từng ảnh
 * @property {String} src - Nguồn ảnh
 */

const CarouselExample = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const image = images.map((item) => {
    return (
      <div
        className="img"
        style={{ backgroundImage: `url(${item.src})` }}
        key={item.id}
      ></div>
    );
  });

  const goToPrevImage = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((index) =>
      index === images.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {image[currentImageIndex]}
      <button className="carousel-button right" onClick={goToNextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="carousel-dots">
        {image.map((item, index) => {
          return (
            <button
              className={
                index === currentImageIndex
                  ? "carousel-dot active"
                  : "carousel-dot"
              }
              key={index}
              onClick={() => setCurrentImageIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

CarouselExample.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CarouselExample;
