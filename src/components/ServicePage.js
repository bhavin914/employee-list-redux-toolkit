import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { FormContext } from "../context/form-context";

import DevelopmentImage from "../images/img1.svg";
import webImage from "../images/img3.svg";
import marketingImage from "../images/img2.svg";
import settingImage from "../images/img4.svg";
import { useDispatch } from "react-redux";
import { Modal } from "antd";

const ServicePage = ({ setScrrenPoint, setIsShowSelectedScreen }) => {
  const { formState, updateFormState } = useContext(FormContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePreviousClick = () => {
    setScrrenPoint(2);
    setIsShowSelectedScreen("default");
  };

  const serviceOptionHandler = (e) => {
    updateFormState({ serviceOption: e.target.value });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.serviceOption) {
      showModal();
      return;
    }

    setScrrenPoint(3);
    setIsShowSelectedScreen("usescreen");
  };

  return (
    <Wrapper>
      <div>
        <span className="heading">
          <h2>Our services</h2>
          <p>Please select which service you are interested in.</p>
        </span>

        <form>
          <div className="container">
            <label className="grid-item">
              <input
                type="radio"
                name="serviceOption"
                value="Development"
                className="hidden-radio"
                onChange={serviceOptionHandler}
                checked={formState.serviceOption === "Development"}
              />
              <div className="item-box">
                <img src={DevelopmentImage} className="icon"></img>
                <span className="text">Development</span>
              </div>
            </label>
            <label className="grid-item">
              <input
                type="radio"
                name="serviceOption"
                value="WebDesign"
                className="hidden-radio"
                onChange={serviceOptionHandler}
                checked={formState.serviceOption === "WebDesign"}
              />
              <div className="item-box">
                <img src={webImage} className="icon"></img>
                <span className="text">Web Design</span>
              </div>
            </label>
            <label className="grid-item">
              <input
                type="radio"
                name="serviceOption"
                value="Marketing"
                className="hidden-radio"
                onChange={serviceOptionHandler}
                checked={formState.serviceOption === "Marketing"}
              />
              <div className="item-box">
                <img src={marketingImage} className="icon"></img>
                <span className="text">Marketing</span>
              </div>
            </label>
            <label className="grid-item">
              <input
                type="radio"
                name="serviceOption"
                value="Other"
                className="hidden-radio"
                onChange={serviceOptionHandler}
                checked={formState.serviceOption === "Other"}
              />
              <div className="item-box">
                <img src={settingImage} className="icon"></img>
                <span className="text">Other</span>
              </div>
            </label>
          </div>
          <div className="multiButton">
            <button className="prevBtn" onClick={handlePreviousClick}>
              Previous Step
            </button>
            <button type="submit" className="button" onClick={handleSubmit}>
              Next Step
            </button>
          </div>
        </form>
        <Modal
          title="Error"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleOk}
          okText="Ok"
          cancelText="Cancel"
        >
          <p>Please select at least one service option before proceeding.</p>
        </Modal>
      </div>
    </Wrapper>
  );
};

export default ServicePage;

const Wrapper = styled.div`
  .twoinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .workspace_name {
    text-align: start !important;
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
  .heading {
    display: grid;
    width: 93%;
    margin: 0 auto;
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

  @media screen and (max-width: 350px) {
    .staticInput {
      font-size: 0.5rem;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-box {
    display: flex;
    border: none;
    padding: 20px 30px;
    border-radius: 10px;
    font-weight: bold;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    font-size: 1rem;
    height: 40px;
    overflow: hidden;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  .text {
    font-size: 1rem;
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
  }

  .hidden-radio {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .grid-item {
    position: relative;
    cursor: pointer;
  }

  .grid-item .item-box {
    border: 2px solid transparent;
  }

  .hidden-radio:checked + .item-box {
    border-color: #4a3aff;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }

    .btn {
      padding: 15px 20px;
    }

    .icon {
      font-size: 1.2rem;
    }

    .text {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .item-box {
      padding: 15px;
    }
    .btn {
      padding: 10px 15px;
    }

    .icon {
      margin-right: 5px;
      font-size: 1rem;
    }

    .text {
      font-size: 0.8rem;
    }
  }
`;
