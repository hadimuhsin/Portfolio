import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';

import Heading1 from '../elements/Heading1';
import Heading2 from '../elements/Heading2';
import Button from '../elements/Button';

const TextHero = styled(Heading1)`
  margin-bottom: 25vh;

  @media (max-width: 849px) {
    margin-bottom: 17vh;
  }
`;

const TextHome = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--primary-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

function Index({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'home_title' })} />
      <TextHero>
        {intl.formatMessage({ id: 'hero_text' })}{' '}
      </TextHero>
      <Heading2>{intl.formatMessage({ id: 'secondary_heading1' })}</Heading2>
      <TextHome>
        {intl.formatMessage({ id: 'home_text' })}{' '}
        <span role="img" aria-label="fire">
          🔥
        </span>
        .
      </TextHome>
      <Link to="/about">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(Index);
