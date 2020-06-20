import React, { Component } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./stepFive";
import Fade from "react-reveal/Fade";

class FormWrapper extends Component {
  state = {
    currentStep: 1,
    firstName: "",
    lastName: "",
    stepOneError: false,
    stepTwoError: false,
    company: "",
    designation: "",
    male: false,
    female: false,
    weight: 20,
    height: 0,
    age: 18,
    activeStep: 1,
    steps: [
      { isStep_1: "active" },
      { isStep_2: "inactive" },
      { isStep_3: "inactive" },
      { isStep_4: "inactive" },
      { isStep_5: "inactive" },
    ],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSliderChange = (event, value) => {
    this.setState({ weight: value });
  };

  handleSliderChangeHeight = (event, value) => {
    const calcHeight = (value / 100) * 7;
    const calculatedHeight = calcHeight.toFixed(1);
    this.setState({ height: calculatedHeight });
  };

  handleSliderChangeAge = (event, value) => {
    this.setState({ age: value });
  };

  handleGenderValue = (gender) => {
    this.setState({
      male: gender === "male",
      female: gender === "female",
    });
  };

  handleNextStep = (e, actvStep) => {
    e.preventDefault();
    if (
      actvStep === 1 &&
      (this.state.firstName === "" || this.state.lastName === "")
    ) {
      this.setState({ stepOneError: true });
      return;
    }
    if (
      actvStep === 2 &&
      (this.state.company === "" || this.state.designation === "")
    ) {
      this.setState({ stepTwoError: true });
      return;
    }
    this.setState({ stepOneError: false, stepTwoError: false });
    const updatedSteps = [...this.state.steps];
    if (this.state.steps.length - actvStep > 0) {
      updatedSteps[actvStep - 1][`isStep_${actvStep}`] = "success";
      updatedSteps[actvStep]["isStep_" + (actvStep + 1)] = "active";
      this.setState({ steps: updatedSteps, activeStep: actvStep + 1 });
    }
  };

  handlePrevStep = (e, actvStep) => {
    e.preventDefault();
    const updatedSteps = [...this.state.steps];
    if (this.state.steps.length - actvStep < 4) {
      updatedSteps[actvStep - 2][`isStep_${actvStep - 1}`] = "active";
      updatedSteps[actvStep - 1]["isStep_" + actvStep] = "inactive";
      this.setState({ steps: updatedSteps, activeStep: actvStep - 1 });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      company,
      designation,
      weight,
      height,
      age,
      currentStep,
      steps,
      activeStep,
      female,
      male,
      stepOneError,
      stepTwoError,
    } = this.state;

    return (
      <div className="formWrapper">
        <h1 className="heading">
          Registration<span>Steps</span>
        </h1>
        <div className="formHolder">
          <form noValidate autoComplete="off">
            {steps[0].isStep_1 === "active" && (
              <Fade>
                <StepOne
                  firstName={firstName}
                  lastName={lastName}
                  currentStep={currentStep}
                  stepOneError={stepOneError}
                  handleChange={this.handleChange}
                />
              </Fade>
            )}
            {steps[1].isStep_2 === "active" && (
              <Fade>
                <StepTwo
                  company={company}
                  designation={designation}
                  currentStep={currentStep}
                  stepTwoError={stepTwoError}
                  handleChange={this.handleChange}
                />
              </Fade>
            )}
            {steps[2].isStep_3 === "active" && (
              <Fade>
                <StepThree
                  handleSliderChange={this.handleSliderChange}
                  handleSliderChangeHeight={this.handleSliderChangeHeight}
                  weight={weight}
                  height={height}
                  female={female}
                  male={male}
                  handleGenderValue={this.handleGenderValue}
                />
              </Fade>
            )}
            {steps[3].isStep_4 === "active" && (
              <Fade>
                <StepFour
                  age={age}
                  handleSliderChangeAge={this.handleSliderChangeAge}
                />
              </Fade>
            )}
            {steps[4].isStep_5 === "active" && (
              <StepFive firstName={firstName} lastName={lastName} />
            )}
            <ul className="stepper">
              {this.state.steps.map((step, index) => (
                <li
                  key={index}
                  className={
                    step[`isStep_${index + 1}`] === "active"
                      ? "active"
                      : step[`isStep_${index + 1}`] === "success"
                      ? "success"
                      : ""
                  }
                >
                  <span className="circle">
                    <span className="circleInner success"></span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="buttonsHolder">
              {activeStep > 1 && (
                <button
                  className="btn prevBtn"
                  onClick={(e) => this.handlePrevStep(e, activeStep)}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              )}
              <button
                className="btn nextBtn"
                onClick={(e) => this.handleNextStep(e, activeStep)}
              >
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormWrapper;
