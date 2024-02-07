import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { FormContext } from "../context/form-context";
import { useDispatch } from "react-redux";
import { Modal } from "antd";

const ContactDetailPage = ({ setScrrenPoint, setIsShowSelectedScreen }) => {
  const { formState, updateFormState } = useContext(FormContext);
  const dispatch = useDispatch();

  const showModal = (message) => {
    Modal.error({
      title: "Validation Error",
      content: message,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formState.Fullname) {
      tempErrors.Fullname = "Name is required.";
      isValid = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formState.Email)) {
      tempErrors.Email = "Email is not valid.";
      isValid = false;
    }
    if (formState.Phonenumber.length === 0) {
      tempErrors.Phonenumber = "Phone number is required.";
      isValid = false;
    }
    if (!formState.CompanyName) {
      tempErrors.CompanyName = "Company name is required.";
      isValid = false;
    }

    // Show modal if form is not valid
    if (!isValid) {
      showModal(
        Object.values(tempErrors)
          .filter((error) => error)
          .join("\n")
      );
    }

    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setScrrenPoint(2);
      setIsShowSelectedScreen("signup");
    }
  };

  return (
    <Wrapper>
      <span className="container title">
        <h2>Contact details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisc.</p>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="twoinput">
          <span className="container">
            <p className="fieldName">Name</p>
            <input
              className="inputField"
              type="text"
              name="Fullname"
              placeholder="John Carter"
              onChange={handleChange}
              value={formState.Fullname || ""}
            />
          </span>
          <span className="container">
            <p className="fieldName">Email</p>
            <input
              className="inputField"
              type="email"
              name="Email"
              placeholder="Email address"
              onChange={handleChange}
              value={formState.Email || ""}
            />
          </span>
        </div>
        <div className="twoinput">
          <span className="container">
            <p className="fieldName">Phone Number</p>
            <input
              className="inputField"
              type="number"
              name="Phonenumber"
              placeholder="(123) 456 - 7890"
              onChange={handleChange}
              value={formState.Phonenumber || ""}
            />
          </span>

          <span className="container">
            <p className="fieldName">Company</p>
            <input
              className="inputField"
              type="text"
              name="CompanyName"
              placeholder="Steve"
              onChange={handleChange}
              value={formState.CompanyName || ""}
            />
          </span>
        </div>
        <div className="multiButton">
          {/* <button className="prevBtn"> Previous Step</button> */}
          <button type="submit" className="button">
            Next Step
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactDetailPage;

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    padding: 10px;
    width: auto;
  }
  .twoinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fieldName {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .container_row {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    margin: 10px;
    padding: 0px;
    gap: 3.5vw;
  }

  .title {
    align-items: flex-start;
    max-width: max-content;
    width: 100%;
  }

  .title p {
    color: rgba(0, 0, 0, 0.6);
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 25rem;
    max-width: 95vw;
  }

  .subtext {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    margin-left: 10px;
  }

  .staticInput {
    height: 1rem;
    max-width: 6.5rem;
    width: 30%;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.4);
    background-color: aliceblue;
    padding: 0.75rem;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
    border-radius: 6px 0px 0px 6px;
    text-align: start;
  }

  .urlfield {
    width: 70%;
    max-width: 95vw;
    border-radius: 0px 6px 6px 0px;
  }

  .useCard {
    max-width: 8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1.2rem;
    cursor: pointer;
    transition: all ease-in-out 180ms;
  }

  .useCard:hover {
    border-color: var(--primaryColor);
    color: var(--primaryColor);
  }

  .active {
    border-color: var(--primaryColor);
    color: var(--primaryColor);
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .title {
    font-size: 16px;
    color: black;
  }

  .desc {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
  }

  .bigIcon {
    width: 100px;
    height: 100px;
    color: var(--primaryColor);
    margin-bottom: 3vh;
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

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  .prevBtn {
    margin-left: 0;
    background: white;
    color: #4a3aff;
    border: 1px solid #4a3aff;
    border-radius: 56px;
  }
  @media screen and (max-width: 350px) {
    .staticInput {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      margin: 0 auto;
    }
    .container {
      width: 40%;
    }
  }
`;
