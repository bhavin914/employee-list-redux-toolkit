import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-header">
            <h1 className="header-text">Aimbrill Techinfo</h1>
            <p className="company-policy">
              Copyright © 2021 Aimbrill Techinfo | All Rights Reserved
            </p>
          </div>
          <div className="footer-input">
            <input placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  .footer-container {
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 -2px 4px #d9dbe9;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
  }

  .footer-header {
    text-align: left;
  }

  .header-text {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  .company-policy {
    font-size: 1rem;
    color: #6f6c90;
    margin-top: 0.25rem;
  }

  .footer-input {
    display: flex;
    position: relative;
  }

  .email-input {
    padding: 0.9rem;
    border: 0.5px solid #eff0f6;
    border-radius: 56px;
    font-size: 18px;
    width: 300px;
    box-shadow: 0px 8px 25px 0px #eff0f6;
  }

  .subscribe-btn {
    background: #4a3aff;
    padding: 10px 12px;
    border: none;
    border-radius: 56px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right: 15px;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-input {
      width: 100%;
      margin-top: 0.5rem;
    }

    .email-input {
      flex: 1;
    }
  }
`;
