import React, { useState } from "react";
import styled from "styled-components";
import StepManager from "./stepManger";

const HomePage = ({ isShowSelectedScreen }) => {
  const currentPage = "contactDetail";

  let title, description;
  if (currentPage) {
    title = "Get an Employee Information";
    description =
      "Please fill the form below to receive an interview details and other information that is regarding the task";
  } else {
    title = "Next Steps in the Process";
    description =
      "Please continue to follow the steps to complete your request.";
  }
  return (
    <div>
      <Wrapper>
        <div className="header-text">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
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
    padding-top: 20px;
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
  @media (max-width: 768px) {
    .title {
      font-size: 19px;
    }
    .header-text {
      width: 77%;
    }
  }
`;
