import React, { useContext, useState } from "react";
import { FormContext } from "../context/form-context";
import { styled } from "styled-components";
import submissionLogo from "../images/submissionLogo.png";
import { useNavigate } from "react-router-dom";
import { addFormData } from "../Slices/FormSlice";
import { useDispatch } from "react-redux";

const SubmissionPage = ({ setScrrenPoint, setIsShowSelectedScreen }) => {
  const { formState, resetFormState } = useContext(FormContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addFormData({ ...formState, id: Date.now().toString() }));
    navigate("/table");
    resetFormState();
  };
  const handlePreviousClick = () => {
    setScrrenPoint(3);
    setIsShowSelectedScreen("usescreen");
  };
  return (
    <Wrapper>
      <div className="container">
        <span>
          <img src={submissionLogo}></img>
          <h3>Submit your quote request</h3>
          <p className="desc">
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </p>
          <div className="multiButton">
            <button className="prevBtn" onClick={handlePreviousClick}>
              Previous Step
            </button>
            <button type="submit" className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </span>
      </div>
    </Wrapper>
  );
};

export default SubmissionPage;

const Wrapper = styled.div`
  .twoinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
  .headings {
    align-items: center;
    max-width: max-content;
    width: 100%;
  }
  .savebtn {
    width: 6rem;
    background-color: #4a3aff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 56px;
    margin: 0 auto;
  }
  .desc {
    margin: 15px 0px;
    line-height: 20px;
  }
  .button {
    background: #4a3aff;
    height: 2.5rem;
    width: 34%;
    margin: 0 auto;
    max-width: 8rem;
    color: white;
    border: none;
    border-radius: 56px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-weight: bold;
    margin-right: 0;
  }

  .multiButton {
    display: flex;
  }

  .prevBtn {
    margin-left: 0;
    background: white;
    color: #4a3aff;
    border: 1px solid #4a3aff;
    border-radius: 56px;
    width: 12rem;
  }
`;
