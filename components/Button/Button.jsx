import React from "react";
import styled from "styled-components";

const GradientButton = styled.button`
  background: linear-gradient(
    90deg,
    var(--bgc-gradient-1000),
    var(--bgc-gradient-2000)
  );
  border: none;
  border-radius: 8px;
  color: white;
  padding: 1px 30px;
  padding-top: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.3s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 650px) {
    margin-bottom: 1.8rem;
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <GradientButton onClick={onClick} disabled={disabled}>
      {children}
    </GradientButton>
  );
};

export default Button;
