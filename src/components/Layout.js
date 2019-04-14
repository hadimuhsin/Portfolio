import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import GlobalStyles from '../elements/GlobalStyles';

const Wrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;
