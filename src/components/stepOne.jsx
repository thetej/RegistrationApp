import React from "react";
import TextField from "@material-ui/core/TextField";
import Fade from "react-reveal/Fade";

const StepOne = ({ firstName, lastName, handleChange, stepOneError }) => (
  <div className="inputHolder step-1">
    <TextField
      defaultValue={firstName}
      onChange={handleChange}
      name="firstName"
      id="standard-basic"
      label="First Name"
    />
    <TextField
      defaultValue={lastName}
      onChange={handleChange}
      name="lastName"
      id="standard-basic"
      label="Last Name"
    />
    {stepOneError && (
      <Fade bottom>
        <p className="error">Please fill mandatory fields.</p>
      </Fade>
    )}
  </div>
);

export default StepOne;
