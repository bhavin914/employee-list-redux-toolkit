import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/table");
  };
  return (
    <div>
      <Wrapper>
        <header className="sticky-header">
          <div className="header-content">
            <h1 className="header-text">Aimbrill Techinfo</h1>
            <div className="parant-btn">
              <button
                href="#employee-list"
                className="header-btn"
                onClick={onSubmit}
              >
                Employee List
              </button>
            </div>
          </div>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;

const Wrapper = styled.div`
  .sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    z-index: 1000;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-btn {
    background: #4a3aff;
    padding: 12px 20px;
    border: none;
    border-radius: 56px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  .parant-btn {
    padding-right: 29px;
  }

  @media (max-width: 768px) {
    .header-content h1 {
      font-size: 17px;
    }
    .header-btn {
      padding: 6px 10px;
    }
  }
`;
