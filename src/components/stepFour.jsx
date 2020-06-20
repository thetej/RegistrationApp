import React from "react";
import Slider from "@material-ui/core/Slider";
import LoadingContent from "./loadingContent";

const StepFour = ({ age, handleSliderChangeAge }) => (
  <div className="step-4">
    <div className="regOptionContainer">
      <h2>
        Select Your Age <span className="info info--age">{age}</span>
      </h2>
      <div className="genericSlider genericSlider--age">
        <Slider
          aria-labelledby="track-false-slider"
          defaultValue={age}
          onChange={handleSliderChangeAge}
          name="age"
        />
      </div>
      <div className="regOptionContainer">
        <h2>Choose your Interest</h2>

        <LoadingContent />
      </div>
    </div>
  </div>
);

export default StepFour;
