import React, { useState, useEffect, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Tooltip from "@material-ui/core/Tooltip";

import Grid from "./components/Grid";
import GridConfig from "./components/GridConfig";

import useStyles from "./App.styles";
import SlideSwitcher from "./components/SlideSwitcher";
import { Backdrop, CircularProgress } from "@material-ui/core";

const GIFEncoder = require("gifencoder");

const shallowCompare = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(key => obj1[key] === obj2[key]);

const SlideGrid = React.memo(
  ({ gridConfig, render, photos, onRenderComplete, onPhotosChanged }) => {
    return (
      <Grid
        {...gridConfig}
        render={render}
        srcPhotos={photos}
        onRenderComplete={onRenderComplete}
        onPhotosChanged={onPhotosChanged}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.render === nextProps.render &&
      shallowCompare(prevProps.gridConfig, nextProps.gridConfig)
    );
  }
);

const App = () => {
  const classes = useStyles();

  // drawer
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // render
  const [render, setRender] = useState(false);
  const [renderedItems, setRenderedItems] = useState([]);

  // grid config
  const [gridConfig, setGridConfig] = useState({});
  const [gridPhotos, setGridPhotos] = useState({});
  const [lastClonedId, setLastClonedId] = useState("");

  // slide switcher
  const [currentSlide, setCurrentSlide] = useState(1);
  const [allSlides, setAllSlides] = useState(1);
  const [slidesMapping, setSlidesMapping] = useState([`id-${Date.now()}`]);

  const handleSlideAdd = () => {
    setAllSlides(allSlides + 1);
    setSlidesMapping([...slidesMapping, `id-${Date.now()}`]);
  };

  const handleSlideCopy = () => {
    const id = slidesMapping[currentSlide - 1];
    const newId = `id-${Date.now()}`;

    if (gridPhotos[id]) {
      const newPhotos = { ...gridPhotos, [newId]: gridPhotos[id] };
      setGridPhotos(newPhotos);
    }

    setLastClonedId(newId);
  };

  const insertClonedSlide = useCallback(() => {
    if (lastClonedId) {
      setAllSlides(allSlides + 1);
      setSlidesMapping([...slidesMapping, lastClonedId]);
    }
  }, [allSlides, lastClonedId, slidesMapping]);

  useEffect(insertClonedSlide, [lastClonedId]);

  const handleSlideDelete = () => {
    setSlidesMapping(
      slidesMapping.filter(slide => slide !== slidesMapping[currentSlide - 1])
    );

    if (allSlides === currentSlide) {
      setCurrentSlide(currentSlide - 1);
    }

    setAllSlides(allSlides - 1);
  };

  const handleSlidePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleSlideNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePhotosChanged = (photos, slideId) => {
    setGridPhotos(currentPhotos => ({ ...currentPhotos, [slideId]: photos }));
  };

  const handleRenderComplete = (canvas, idx) => {
    setRenderedItems(items => [...items, canvas]);
  };

  useEffect(() => {
    if (renderedItems.length > 0 && renderedItems.length === allSlides) {
      const { width, height } = renderedItems[0];
      const encoder = new GIFEncoder(width, height);

      encoder.setRepeat(0);
      encoder.setDelay(1000);

      encoder.start();
      renderedItems.forEach(item => encoder.addFrame(item.getContext("2d")));
      encoder.finish();

      const templink = document.createElement("a");
      templink.download = `${width}x${height}.gif`;
      templink.href = URL.createObjectURL(
        new Blob([new Uint8Array(encoder.out.data)], { type: "image/gif" })
      );
      templink.click();

      setRender(false);
      setRenderedItems([]);
    }
  }, [renderedItems, allSlides]);

  // slides
  const slides = slidesMapping.map((id, idx) => {
    const style =
      idx + 1 === currentSlide || render
        ? {}
        : { position: "absolute", visibility: "hidden", pointerEvents: "none" };
    //const style = { display: idx + 1 === currentSlide ? "block" : "none" };
    //const style = { opacity: idx + 1 === currentSlide ? 1 : 0.4 };
    return (
      <div style={style} key={id}>
        <SlideGrid
          gridConfig={gridConfig}
          render={render}
          onRenderComplete={canvas => handleRenderComplete(canvas, idx)}
          photos={gridPhotos[id] || []}
          onPhotosChanged={photos => handlePhotosChanged(photos, id)}
        />
      </div>
    );
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            MossaIQ
          </Typography>
          <SlideSwitcher
            currentSlide={currentSlide}
            countAllSlides={allSlides}
            onAdd={handleSlideAdd}
            onCopy={handleSlideCopy}
            onDelete={handleSlideDelete}
            onNext={handleSlideNext}
            onPrev={handleSlidePrev}
          />
          <Tooltip title={<FormattedMessage id="app.render" />}>
            <span>
              <IconButton
                color="inherit"
                disabled={render > 0}
                onClick={() => setRender(true)}
                className={clsx(open && classes.hide)}
              >
                <CloudDownloadIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={<FormattedMessage id="app.grid-config" />}>
            <span>
              <IconButton
                color="inherit"
                edge="end"
                disabled={render > 0}
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <SettingsIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Backdrop className={classes.backdrop} open={render}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        {slides}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <FormattedMessage id="app.grid-config" />
          </Typography>
        </div>
        <Divider />
        <div className={classes.drawerBody}>
          <GridConfig onValuesChanged={setGridConfig} />
        </div>
      </Drawer>
    </div>
  );
};

export default App;
