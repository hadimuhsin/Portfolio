import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

const Container = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 25vh;
  text-align: left;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

function Footer({ intl }) {
  return (
    <Container>
      <Link to="/t&p">{intl.formatMessage({ id: 'legal' })}</Link>
      <p>
        © {new Date().getFullYear()}, {intl.formatMessage({ id: 'title' })}
      </p>
    </Container>
  );
}

export default injectIntl(Footer);
