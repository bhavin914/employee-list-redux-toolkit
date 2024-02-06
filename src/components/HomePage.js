import React from "react";
import styled from "styled-components";
import StepManager from "./stepManger";

const HomePage = ({ screenPoint, isShowSelectedScreen }) => {
  return (
    <div>
      <Wrapper>
        <div className="header-text">
          <h2 className="title">Get an Employee Information</h2>
          <p className="description">
            Please fill the form below to receive an interview details and other
            information that is regarding the task
          </p>
        </div>
        <div className="app">
          <StepManager />
        </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;

const Wrapper = styled.div`
  .header-text {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    display: grid;
    gap: 10px;
  }

  .title {
    color: #170f49;
  }

  .description {
    width: 85%;
    margin: 0 auto;
    color: #6f6c90;
    line-height: 30px;
    font-sixe: 13px;
  }
`;
