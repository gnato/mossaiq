import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CirclePicker } from "react-color";

import useStyles from "./styles";

const defaultColor = "#fff";
const sliders = [
  {
    label: "columns",
    name: "cols",
    min: 1,
    max: 10,
    default: 4,
    unit: "px"
  },
  {
    label: "margins",
    name: "margin",
    min: 0,
    max: 50,
    default: 10,
    unit: "px"
  },
  {
    label: "box-width",
    name: "width",
    min: 50,
    max: 500,
    default: 100,
    unit: "px"
  },
  {
    label: "box-height",
    name: "height",
    min: 50,
    max: 500,
    default: 100,
    unit: "px"
  },
  {
    label: "items-count",
    name: "items",
    min: 1,
    max: 50,
    default: 8,
    unit: ""
  }
];

const presets = [
  {
    name: "120 x 600",
    values: { margin: 5, cols: 1, width: 110, height: 144, items: 4 }
  },
  {
    name: "300 x 250",
    values: { margin: 5, cols: 2, width: 142, height: 118, items: 4 }
  },
  {
    name: "300 x 600",
    values: { margin: 7, cols: 2, width: 140, height: 141, items: 8 }
  },
  {
    name: "750 x 100",
    values: { margin: 5, cols: 5, width: 144, height: 90, items: 5 }
  },
  {
    name: "750 x 200",
    values: { margin: 5, cols: 5, width: 144, height: 190, items: 5 }
  }
];

const GridConfig = ({ onValuesChanged = () => {} }) => {
  const classes = useStyles();

  // preset
  const [valPreset, setValPreset] = useState("");

  const handleChangePreset = e => {
    const val = e.target.value;
    setValPreset(val);
    setValSliders({ ...valSliders, ...presets[val].values });
  };

  // slides
  const defaultValSliders = Object.fromEntries(
    sliders.map(slider => [slider.name, slider.default])
  );
  const [valSliders, setValSliders] = useState(defaultValSliders);

  const handleChangeSlider = (value, name) => {
    if (valSliders[name] === value) return;

    setValPreset("");
    setValSliders({ ...valSliders, [name]: value });
  };

  // colorpicker
  const [valColor, setValCoolor] = useState(defaultColor);

  // push changed values outside
  useEffect(() => {
    onValuesChanged({ ...valSliders, colorBackground: valColor });
  }, [valSliders, valColor]);

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-preset-label">
          <FormattedMessage id="grid-config.presets" />
        </InputLabel>
        <Select
          labelId="select-preset-label"
          id="select-preset"
          value={valPreset}
          onChange={handleChangePreset}
        >
          {presets.map((preset, idx) => (
            <MenuItem key={idx} value={idx}>
              {preset.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {sliders.map(slider => (
        <div className={classes.slider} key={slider.name}>
          <InputLabel>
            <FormattedMessage id={`grid-config.${slider.label}`} />
          </InputLabel>
          <Slider
            value={valSliders[slider.name]}
            aria-labelledby="discrete-slider"
            step={1}
            name={slider.name}
            min={slider.min}
            max={slider.max}
            valueLabelDisplay="auto"
            onChange={(e, val) => handleChangeSlider(val, slider.name)}
            marks={[
              { value: slider.min, label: `${slider.min} ${slider.unit}` },
              { value: slider.max, label: `${slider.max} ${slider.unit}` }
            ]}
          />
        </div>
      ))}

      <InputLabel>
        <FormattedMessage id="grid-config.color" />
      </InputLabel>
      <br />
      <CirclePicker
        color={valColor}
        width={"100%"}
        circleSize={26}
        onChange={color => setValCoolor(color.hex)}
        colors={[
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4caf50",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",
          "#ffc107",
          "#ff9800",
          "#ff5722",
          "#795548",
          "#607d8b",
          "#ffffff"
        ]}
      />
    </>
  );
};

export default GridConfig;
