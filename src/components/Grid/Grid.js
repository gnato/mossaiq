import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Muuri from "muuri";
import html2canvas from "html2canvas";

import GridItem from "../GridItem";

import "./style.scss";

const Grid = ({
  cols,
  margin,
  width,
  height,
  colorBackground,
  items,
  render,
  srcPhotos,
  onRenderComplete,
  onPhotosChanged
}) => {
  // params
  const [colsVal, setColsVal] = useState(cols);
  const [marginVal, setMarginVal] = useState(margin);
  const [widthVal, setWidthVal] = useState(width);
  const [heightVal, setHeightVal] = useState(height);
  const [itemsVal, setItemsVal] = useState(items);
  const [colorBackgroundVal, setcolorBackgroundVal] = useState(colorBackground);
  const [photos, setPhotos] = useState(srcPhotos);

  useEffect(() => {
    setColsVal(cols);
    refreshLayout();
  }, [cols]);

  useEffect(() => {
    setMarginVal(margin);
    refreshLayout();
  }, [margin]);

  useEffect(() => {
    setWidthVal(width);
    refreshLayout();
  }, [width]);

  useEffect(() => {
    setHeightVal(height);
    refreshLayout();
  }, [height]);

  useEffect(() => {
    setItemsVal(items);

    setTimeout(() => {
      const tmpItems = [];
      if (items > itemsVal) {
        for (let i = itemsVal; i < items; i += 1) {
          tmpItems.push(gridWrap.current.children[i]);
        }
        grid.current.add(tmpItems);
      } else {
        refreshLayout();
      }
    }, 0);
  }, [items, itemsVal]);

  useEffect(() => setcolorBackgroundVal(colorBackground), [colorBackground]);

  const refreshLayout = () => {
    if (typeof grid.current !== "undefined") {
      setTimeout(() => {
        grid.current.refreshItems();
        grid.current.layout();
      }, 0);
    }
  };

  const handleWindowDrop = event => {
    event.preventDefault();
  };

  // muuri set
  const grid = useRef();
  const gridWrap = useRef();
  const gridOuter = useRef();

  useEffect(() => {
    grid.current = new Muuri(gridWrap.current, {
      dragEnabled: true,
      dragPlaceholder: {
        enabled: true,
        duration: 400,
        createElement: function(item) {
          return item.getElement().cloneNode(true);
        }
      }
    });

    // reload dom after sort
    grid.current.on("dragReleaseEnd", () => grid.current.synchronize());

    // prevent default drop event
    window.addEventListener("dragover", handleWindowDrop);
    window.addEventListener("drop", handleWindowDrop);

    return () => {
      grid.current.destroy();
      window.removeEventListener("dragover", handleWindowDrop);
      window.removeEventListener("drop", handleWindowDrop);
    };
  }, []);

  // render
  useEffect(() => {
    if (!render) return;

    html2canvas(gridOuter.current).then(canvas => {
      /* const a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = `mossaiq.jpg`;
      a.click(); */

      onRenderComplete(canvas);
    });
  }, [render, onRenderComplete]);

  const handlePhotoLoad = (photo, crop, idx) => {
    const newPhotos = [...photos];
    newPhotos[idx] = {
      photo,
      crop
    };

    setPhotos(newPhotos);
    onPhotosChanged(newPhotos);
  };

  // prepare boxes
  const boxes = [...Array(itemsVal).keys()].map(item => (
    <GridItem
      key={item}
      width={widthVal}
      height={heightVal}
      margin={marginVal}
      content={`${item + 1}`}
      srcPhoto={photos[item] ? photos[item].photo : null}
      srcCrop={photos[item] ? photos[item].crop : null}
      onPhotoLoad={(photo, crop) => handlePhotoLoad(photo, crop, item)}
    />
  ));

  return (
    <>
      <div
        ref={gridOuter}
        className="grid-outer"
        style={{
          width: colsVal * widthVal + colsVal * marginVal + marginVal,
          paddingTop: marginVal,
          paddingLeft: marginVal,
          background: colorBackgroundVal
        }}
      >
        <div className="grid" ref={gridWrap}>
          {boxes}
        </div>
      </div>
    </>
  );
};

Grid.propTypes = {
  cols: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  colorBackground: PropTypes.string.isRequired,
  render: PropTypes.bool,
  srcPhotos: PropTypes.array,
  onRenderComplete: PropTypes.func,
  onPhotosChanged: PropTypes.func
};

Grid.defaultProps = {
  cols: 1,
  margin: 0,
  width: 10,
  height: 10,
  items: 0,
  colorBackground: "#ddd",
  render: false,
  srcPhotos: [],
  onRenderComplete: () => {},
  onPhotosChanged: () => {}
};

export default Grid;
