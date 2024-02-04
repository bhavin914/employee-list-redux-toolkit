import React, { useState } from "react";
import { styled } from "styled-components";
import { ProgressBar, Step as ProgressBarStep } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import ContactDetailPage from "./ContactDetails";
import ServicePage from "./WorkspaceForm";
import QuotionPage from "./UsageForm";
import SubmissionPage from "./CongratzPage";

const StepManager = () => {
  const [screenPoint, setScrrenPoint] = useState(1);
  const [isShowSelectedScreen, setIsShowSelectedScreen] = useState("default");
  const totalSteps = 4;

  var stepPercentage = 0;
  if (screenPoint === 1) {
    stepPercentage = 16;
  } else if (screenPoint === 2) {
    stepPercentage = 49.5;
  } else if (screenPoint === 3) {
    stepPercentage = 82.5;
  } else if (screenPoint === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  //   const percentage = screenPoint === 1 ? 12.5 : ((screenPoint - 1) / (totalSteps - 1)) * 100;

  const allScreens = [
    {
      component: (
        <ContactDetailPage
          setScrrenPoint={setScrrenPoint}
          setIsShowSelectedScreen={setIsShowSelectedScreen}
        />
      ),
      showIn: ["default"],
    },
    {
      component: (
        <ServicePage
          setScrrenPoint={setScrrenPoint}
          setIsShowSelectedScreen={setIsShowSelectedScreen}
        />
      ),
      showIn: ["service"],
    },
    {
      component: (
        <QuotionPage
          setScrrenPoint={setScrrenPoint}
          setIsShowSelectedScreen={setIsShowSelectedScreen}
        />
      ),
      showIn: ["usescreen"],
    },
    {
      component: (
        <SubmissionPage
          setScrrenPoint={setScrrenPoint}
          setIsShowSelectedScreen={setIsShowSelectedScreen}
        />
      ),
      showIn: ["default"],
    },
  ];

  const steps = allScreens.filter(
    (step) =>
      step.showIn.includes(isShowSelectedScreen) ||
      step.showIn.includes("default") ||
      step.showIn.includes("signup") ||
      step.showIn.includes("usescreen")
  );
  const { component } = steps?.[screenPoint - 1] || {};

  return (
    <Wrapper>
      <div className="formdiv">
        <div className="FormWrapper">
          <div className="ProgressBarContainer">
            <ProgressBar
              //   percent={(screenPoint / totalSteps) * 100}
              percent={stepPercentage}
              filledBackground="#4a3aff"
            >
              {Array.from({ length: totalSteps }, (_, index) => (
                <ProgressBarStep key={index} transition="scale">
                  {({ accomplished }) => (
                    <StepNumber
                      isCompleted={screenPoint > index}
                      isActive={screenPoint === index + 1}
                      isFirstHalf={index === 0 && screenPoint === 1}
                    >
                      {index + 1}
                    </StepNumber>
                  )}
                </ProgressBarStep>
              ))}
            </ProgressBar>
          </div>
          <div className="card">{component}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StepManager;

const Wrapper = styled.div`
  .form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    width: auto;
  }

  h1 {
    margin: 5px 0px;
    font-size: 1.8em;
  }

  p {
    margin: 5px 0px;
    font-size: small;
  }

  . FormWrapper {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  button {
    background: #4a3aff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
  }
  .RSPBprogressBar {
    background: #eff0f6;
  }
  .ProgressBarContainer {
    width: 75%;
    margin: 0 auto;
    padding: 35px 0px;
    border-bottom: 1px solid;
    border-color: #d9dbe9;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const StepNumber = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0 5px;
  background: ${(props) =>
    props.isCompleted || props.isFirstHalf ? "#4a3aff" : "#EFF0F6"};
  color: ${(props) =>
    props.isCompleted || props.isActive ? "white" : "black"};
  border: block;
`;
