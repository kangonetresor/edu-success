import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? '#2C3E50' : '#ECF0F1')};
    color: ${props => (props.darkMode ? '#ECF0F1' : '#2C3E50')};
    transition: all 0.3s ease;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Mode Jour' : 'Mode Nuit'}
      </Button>
    </>
  );
};

export default DarkModeButton;
