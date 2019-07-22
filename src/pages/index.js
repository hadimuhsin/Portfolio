import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Head, HeadingXL, Layout } from '../components';

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

function Index({ intl, data }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'home_title' })} />
      <HeadingXL>{intl.formatMessage({ id: 'hero_text' })} </HeadingXL>
      <TextHome>{intl.formatMessage({ id: 'home_text1' })}</TextHome>
      <Link to="/about">
        <Button>{intl.formatMessage({ id: 'learn_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(Index);
