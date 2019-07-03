import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Head, Heading1, Heading2, Image, Layout } from '../components';

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

function Index({ intl, data }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'home_title' })} />
      <Heading1>{intl.formatMessage({ id: 'hero_text' })} </Heading1>
      <Image fluid={data.image2.childImageSharp.fluid} alt="image1" />
      <Heading2>{intl.formatMessage({ id: 'secondary_heading1' })}</Heading2>
      <TextHome>{intl.formatMessage({ id: 'home_text' })}</TextHome>
      <Link to="/about">
        <Button>{intl.formatMessage({ id: 'cta_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(Index);

export const query = graphql`
  query {
    image2: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
