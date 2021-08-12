import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Title } from '../assets/images/title.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled.div`
  flex-direction: column;
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  h1 {
    position: relative;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 40px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const StyledTitle = styled(Title)`
  width: 100%;
  fill: ${({ theme }) => theme.colors.gamboge};
  padding: 20px;
  filter: drop-shadow(4px 10px 12px rgba(0, 0, 0, 0.75));
  display: flex;
  margin-bottom: 50px;
`;
// const StyledButton = styled.button`
//   display: flex;
//   width: 50%;
//   height: 50px;
//   border: none;
//   padding: 1em;
//   border-radius: 10px;
//   margin-bottom: 20px;
//   font-size: 1.2rem;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 4px 4px 12px -4px rgba(0, 0, 0, 0.7);
//   background-color: ${({ theme }) => theme.colors.mediumChampagne};
// `;

const StyledH1 = styled.h1`
  display: flex;
  position: relative;
  top: -20vh;
  width: 80%;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin-bottom: 40px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;
const StyledButton = styled.button`
  display: flex;
  position: relative;
  width: 80%;
  border-radius: 35px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin-bottom: 40px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
const StartGame = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <StyledH1>I know that I don't know - guiz</StyledH1>
      <StyledButton onClick={() => history.push('/settings')}>
        Start Game
      </StyledButton>
      <StyledButton onClick={() => history.push('/rank')}>Rank</StyledButton>
    </Wrapper>
  );
};
export default StartGame;
