import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, HeadingXL, Layout, SEO, TextBody } from '../components';

const NotFoundPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'notfound_title' })} />
      <HeadingXL>{intl.formatMessage({ id: 'notfound_title' })}</HeadingXL>
      <TextBody>
        {intl.formatMessage({ id: 'notfound_text' })}{' '}
        <span role="img" aria-label="duh">
          😓
        </span>
      </TextBody>
      <Link to="/">
        <Button>{intl.formatMessage({ id: 'notfound_button' })}</Button>
      </Link>
    </Layout>
  );
};

export default injectIntl(NotFoundPage);
