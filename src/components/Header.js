import React from "react";

import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Wrapper>
        <header className="sticky-header">
          <div className="header-content">
            <h1 className="header-text">Aimbrill Techinfo</h1>
            <div>
              <button href="#employee-list" className="header-btn">
                Employee List
              </button>
            </div>
          </div>
        </header>
        {/* <LoginScreen /> */}
      </Wrapper>
    </div>
  );
};

export default Header;

const Wrapper = styled.div`
  .sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
    padding: 2rem;
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

  @media (max-width: 768px) {
    .header-content h1 {
      font-size: 1.5rem;
    }
  }
`;
