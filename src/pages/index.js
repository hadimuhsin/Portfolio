import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import { HeadingXL, Layout, SEO } from '../components';

const TextHome = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--dark-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

const Home = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'home_title' })} />
      <HeadingXL>{intl.formatMessage({ id: 'hero_text' })}</HeadingXL>
      <TextHome>{intl.formatMessage({ id: 'home_text1' })}</TextHome>
    </Layout>
  );
};

export default injectIntl(Home);
