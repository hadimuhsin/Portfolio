import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import { Button, Head, HeadingXL, Layout, TextBody } from '../components';

function NotFoundPage({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'notfound_title' })} />
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
}

export default injectIntl(NotFoundPage);
