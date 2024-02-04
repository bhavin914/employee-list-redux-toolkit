import React, { useContext } from "react";
import { styled } from "styled-components";
import { FormContext } from "../context/form-context";

const ContactDetailPage = ({ setScrrenPoint, setIsShowSelectedScreen }) => {
  const { formState, updateFormState } = useContext(FormContext);

  const fullNameHandler = (e) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    // dispatch(addFormData(formState));
    // Navigate to the next step
    setScrrenPoint(2);
    setIsShowSelectedScreen("signup");
  };

  // const displayNameHandler = (event) => {
  //   setfirstform((prevData) => ({
  //     ...prevData,
  //     CompanyName: event.target.value,
  //   }));
  //   // event.target.value === ""
  //   //   ? setValidation((prevData) => ({ ...prevData, CompanyName: false }))
  //   //   : setValidation((prevData) => ({ ...prevData, CompanyName: true }));
  // };

  // const EmailHandler = (event) => {
  //   setfirstform((prevData) => ({ ...prevData, Email: event.target.value }));
  //   // event.target.value === ""
  //   //   ? setValidation((prevData) => ({ ...prevData, Email: false }))
  //   //   : setValidation((prevData) => ({ ...prevData, Email: true }));
  // };

  // const phonenumberHandler = (event) => {
  //   setfirstform((prevData) => ({ ...prevData, Phonenumber: event.target.value }));
  //   // event.target.value === ""
  //   //   ? setValidation((prevData) => ({ ...prevData, Phonenumber: false }))
  //   //   : setValidation((prevData) => ({ ...prevData, Phonenumber: true }));
  // };

  return (
    <Wrapper>
      <span className="container title">
        <h1>Contact Details</h1>
        <p>
          Please fill the form below to receive an interview details and other
          information that is regarding the task.
        </p>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="twoinput">
          <span className="container">
            <p>Full Name</p>
            <input
              className="inputField"
              type="text"
              name="Fullname"
              placeholder="Steve Jobs"
              onChange={fullNameHandler}
              value={formState.Fullname}
            />
          </span>
          <span className="container">
            <p>Email</p>
            <input
              className="inputField"
              type="email"
              name="Email"
              placeholder="abc@gmail.com"
              onChange={fullNameHandler}
              value={formState.Email}
            />
          </span>
        </div>
        <div className="twoinput">
          <span className="container">
            <p>Company Name</p>
            <input
              className="inputField"
              type="text"
              name="CompanyName"
              placeholder="Steve"
              onChange={fullNameHandler}
              value={formState.CompanyName}
            />
          </span>
          <span className="container">
            <p>Phone Number</p>
            <input
              className="inputField"
              type="number"
              name="Phonenumber"
              placeholder="Steve"
              onChange={fullNameHandler}
              value={formState.Phonenumber}
            />
          </span>
        </div>
        <button type="submit" className="button">
          Next
        </button>
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

  @media screen and (max-width: 350px) {
    .staticInput {
      font-size: 0.5rem;
    }
  }
`;
