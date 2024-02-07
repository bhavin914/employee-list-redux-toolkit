import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addFormData } from "../Slices/FormSlice";
import { FormContext } from "../context/form-context";
import { Modal } from "antd";

const QuotionPage = ({ setScrrenPoint, setIsShowSelectedScreen }) => {
  const { formState, updateFormState } = useContext(FormContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePreviousClick = () => {
    setScrrenPoint(2);
    setIsShowSelectedScreen("signup");
  };

  const handleBudgetChange = (e) => {
    updateFormState({ budget: e.target.value });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.budget) {
      showModal();
      return;
    }
    // dispatch(addFormData({ ...formState, id: "budgetSelection" }));

    setScrrenPoint(4);
    setIsShowSelectedScreen("default");
  };
  return (
    <Wrapper>
      <span className="heading">
        <h2>What’s your project budget?</h2>
        <p>Please select the project budget range you have in mind.</p>
      </span>
      <form>
        <div className="container">
          <div className="grid-item">
            <label className="item-box">
              <input
                type="radio"
                name="budget"
                value="$5,000 - $10,000"
                onChange={handleBudgetChange}
                checked={formState.budget === "$5,000 - $10,000"}
              />
              <span className="text">$5.000 - $10.000</span>
            </label>
          </div>
          <div className="grid-item">
            <label className="item-box">
              <input
                type="radio"
                name="budget"
                value="$10.000 - $20.000"
                onChange={handleBudgetChange}
                checked={formState.budget === "$10.000 - $20.000"}
              />
              <span className="text">$10.000 - $20.000</span>
            </label>
          </div>
          <div className="grid-item">
            <label className="item-box">
              <input
                type="radio"
                name="budget"
                value="$20.000 - $50.000"
                onChange={handleBudgetChange}
                checked={formState.budget === "$20.000 - $50.000"}
              />
              <span className="text">$20.000 - $50.000</span>
            </label>
          </div>
          <div className="grid-item">
            <label className="item-box">
              <input
                type="radio"
                name="budget"
                value="$50.000 +"
                onChange={handleBudgetChange}
                checked={formState.budget === "$50.000 +"}
              />
              <span className="text">$50.000 +</span>
            </label>
          </div>
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
    </Wrapper>
  );
};

export default QuotionPage;

const Wrapper = styled.div`
  .heading {
    display: grid;
    width: 93%;
    margin: 0 auto;
    padding-top: 10px;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    font-size: 1rem;
    gap: 11px;
    cursor: pointer;
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

  @media (max-width: 480px) {
    .btn {
      padding: 10px 15px; /* Even smaller padding on very small screens */
    }

    .icon {
      margin-right: 5px;
      font-size: 1rem;
    }

    .text {
      font-size: 0.8rem;
    }
    .multiButton {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
