import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
  overflow: hidden;
  .color {
    position: absolute;
    filter: blur(150px);
  }
  .color:nth-child(1) {
    top: -10vh;
    width: 100%;
    height: 100vh;
    background: #ff359b;
  }
  .color:nth-child(2) {
    bottom: -15vh;
    left: 10vw;
    width: 100%;
    height: 100vh;
    background: #fffd87;
  }
  .color:nth-child(3) {
    bottom: -50vh;
    right: 30vw;
    width: 100%;
    height: 100vh;
    background: #00d2ff;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <div className="color" />
      <div className="color" />
      <div className="color" />
      {children}
    </Wrapper>
  );
};
export default MainTemplate;
