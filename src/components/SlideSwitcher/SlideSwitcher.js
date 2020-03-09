import React from "react";
import PropTypes from "prop-types";
import { Tooltip, IconButton } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import "./style.scss";

const SlideSwitcher = ({
  currentSlide,
  countAllSlides,
  onAdd,
  onCopy,
  onDelete,
  onNext,
  onPrev
}) => {
  return (
    <div className="wrapper">
      <Tooltip title={<FormattedMessage id="slide.prev" />}>
        <span>
          <IconButton
            color="inherit"
            disabled={currentSlide === 1}
            onClick={onPrev}
          >
            <ArrowLeftIcon />
          </IconButton>
        </span>
      </Tooltip>
      {currentSlide} / {countAllSlides}
      <Tooltip title={<FormattedMessage id="slide.next" />}>
        <span>
          <IconButton
            color="inherit"
            disabled={countAllSlides === currentSlide}
            onClick={onNext}
          >
            <ArrowRightIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={<FormattedMessage id="slide.add" />}>
        <span>
          <IconButton color="inherit" onClick={onAdd}>
            <AddIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={<FormattedMessage id="slide.copy" />}>
        <span>
          <IconButton color="inherit" onClick={onCopy}>
            <FileCopyIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={<FormattedMessage id="slide.delete" />}>
        <span>
          <IconButton
            color="inherit"
            disabled={countAllSlides === 1}
            onClick={onDelete}
          >
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
    </div>
  );
};

SlideSwitcher.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  countAllSlides: PropTypes.number.isRequired,
  onAdd: PropTypes.func,
  onCopy: PropTypes.func,
  onDelete: PropTypes.func,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};

SlideSwitcher.defaultProps = {
  currentSlide: 1,
  countAllSlides: 1
};

export default SlideSwitcher;
