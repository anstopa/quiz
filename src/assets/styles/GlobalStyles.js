import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  html{
    box-sizing: border-box;
  }
  *,*::after, *::before {
    box-sizing: inherit;
  margin: 0;
    padding: 0;
  }
  
  
body{
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}
  a,button {
    font-family: 'Montserrat', sans-serif;
  }
`;
