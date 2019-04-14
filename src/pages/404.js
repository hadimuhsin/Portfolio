import React from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Head from '../components/Head';

import Heading1 from '../elements/Heading1';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

function NotFoundPage({ intl }) {
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: 'notfound_title' })} />
      <Heading1>{intl.formatMessage({ id: 'notfound_title' })}</Heading1>
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
