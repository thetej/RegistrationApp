import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const StepFive = ({ firstName, lastName }) => {
  const [isShow, setIsShow] = useState(false);
  setTimeout(() => {
    setIsShow(true);
  }, 500);
  return (
    <Fade bottom>
      <div className={`registration-success ${isShow && "show"}`}>
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
