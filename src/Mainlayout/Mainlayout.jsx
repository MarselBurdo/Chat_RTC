import React from 'react'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../Styled/Theme';
import Navigation from '../Navigation/Navigation';

const theme={}

function Mainlayout() {
  return (<>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navigation names={['home', 'rooms', 'about']}/>
    </ThemeProvider>
  </>)
}

export default Mainlayout
