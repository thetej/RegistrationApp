import React from "react";
import TextField from "@material-ui/core/TextField";
import Fade from "react-reveal/Fade";

const StepTwo = ({ company, designation, handleChange, stepTwoError }) => (
  <div className="inputHolder step-2">
    <TextField
      defaultValue={company}
      onChange={handleChange}
      name="company"
      id="standard-basic"
      label="Company"
    />
    <TextField
      defaultValue={designation}
      onChange={handleChange}
      name="designation"
      id="standard-basic"
      label="Designation"
    />
    {stepTwoError && (
      <Fade bottom>
        <p className="error">Please fill mandatory fields.</p>
      </Fade>
    )}
  </div>
);
export default StepTwo;
