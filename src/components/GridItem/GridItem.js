import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import smartcrop from "smartcrop";

import "./style.scss";

const GridItem = ({ width, height, margin, content }) => {
  const [photo, setPhoto] = useState(null);
  const [crop, setCrop] = useState(null);

  const image = useRef();

  const handleDrop = e => {
    if (!e.dataTransfer || e.dataTransfer.files.length === 0) return;

    const reader = new FileReader();
    const file = e.dataTransfer.files[0];

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const calculateScale = () => {
    let scale = 100;

    if (width >= height) {
      scale = (width * 100) / crop.width;
    } else {
      scale = (height * 100) / crop.height;
    }

    return scale / 100;
  };

  useEffect(() => {
    if (!image.current) return;
    smartcrop
      .crop(image.current, { width, height })
      .then(val => setCrop(val.topCrop));
  }, [width, height, photo]);

  return (
    <div
      className="item"
      style={{
        width,
        height,
        marginRight: margin,
        marginBottom: margin
      }}
    >
      <div className="item-content" onDrop={handleDrop}>
        {photo && (
          <img src={photo} ref={image} style={{ display: "none" }} alt="" />
        )}
        {crop && (
          <div
            className="item-crop-wrap"
            style={{
              width: crop.width,
              height: crop.height,
              transform: `scale(${calculateScale()})`
            }}
          >
            <img
              src={photo}
              alt=""
              className="item-crop-img"
              style={{ top: crop.y * -1, left: crop.x * -1 }}
            />
          </div>
        )}
        {!photo && content}
      </div>
    </div>
  );
};

GridItem.propTypes = {
  margin: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  content: PropTypes.string
};

GridItem.defaultProps = {
  margin: 0,
  width: 10,
  height: 10
};

export default GridItem;
