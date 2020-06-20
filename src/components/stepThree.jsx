import React from "react";
import Slider from "@material-ui/core/Slider";
import { marks, heightSelector } from "../constant";

const StepThree = ({
  female,
  male,
  weight,
  height,
  handleGenderValue,
  handleSliderChange,
  handleSliderChangeHeight,
}) => (
  <div className="step-3">
    <div className="regOptionContainer">
      <h2>Gender</h2>
      <ul className="selectGender">
        <li>
          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            onChange={(e) => handleGenderValue("female")}
            checked={female}
          />
          <label htmlFor="female">
            <span className="label">Female</span>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            onChange={(e) => handleGenderValue("male")}
            checked={male}
          />
          <label htmlFor="male">
            <span className="label">Male</span>
          </label>
        </li>
      </ul>
    </div>
    <div className="regOptionContainer">
      <h2>
        Weight{" "}
        <span className="info">
          {weight}
          <span className="desc">KG</span>
        </span>
      </h2>
      <div className="rulerHolder rulerHolder--weight">
        <Slider
          track={false}
          aria-labelledby="track-false-slider"
          marks={marks}
          onChange={handleSliderChange}
        />
      </div>
    </div>
    <div className="regOptionContainer">
      <h2>
        Height
        <span className="info info--height">
          {height}
          <span className="desc">FT</span>
        </span>
      </h2>
      <div className="rulerHolder rulerHolder--height">
        <Slider
          track={false}
          aria-labelledby="track-false-slider"
          marks={heightSelector}
          onChange={handleSliderChangeHeight}
        />
      </div>
    </div>
  </div>
);

export default StepThree;
