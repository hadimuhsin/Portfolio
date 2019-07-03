import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Head, Heading1, Image, Layout, TextBody } from '../components';

function About({ intl, data }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'about_title' })} />
      <Heading1>{intl.formatMessage({ id: 'about_title' })}</Heading1>
      <Image fluid={data.image1.childImageSharp.fluid} alt="image1" />
      <TextBody>
        {intl.formatMessage({ id: 'about_text1' })}
        <br />
        <br />
        {intl.formatMessage({ id: 'about_text2' })}
      </TextBody>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'contact_button' })}</Button>
      </Link>
    </Layout>
  );
}

export default injectIntl(About);

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
