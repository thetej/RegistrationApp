import React from "react";
import Fade from "react-reveal/Fade";

const StepFive = ({ firstName, lastName, show }) => {
  return (
    <Fade bottom>
      <div className="registration-success">
        <h1>
          <span className="welcomeMsg">Welcome</span>
          {`${firstName} ${lastName}`}
        </h1>
        <div className="icon"></div>
      </div>
    </Fade>
  );
};

export default StepFive;
