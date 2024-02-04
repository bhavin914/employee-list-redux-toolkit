import React from "react";
import styled from "styled-components";
import StepManager from "./stepManger";

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <div className="app">
          <StepManager />
        </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;

const Wrapper = styled.div``;
