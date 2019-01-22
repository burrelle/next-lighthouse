import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {

};

const GlobalStyle = createGlobalStyle``;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Meta />
          <div>{this.props.children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
