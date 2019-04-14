import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';

function Head({ intl }) {
  return (
    <Helmet
      htmlAttributes={{ lang: `${intl.formatMessage({ id: 'lang' })}`, }}
      title={intl.formatMessage({ id: 'title' })}
      titleTemplate={`%s ― ${intl.formatMessage({ id: 'title' })}`}
      meta={[
        {
          name: `description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          property: `og:title`,
          content: `${intl.formatMessage({ id: 'title' })}`,
        },
        {
          property: `og:description`,
          content: `${intl.formatMessage({ id: 'description' })}`,
        },
        {
          property: `author`,
          content: `${intl.formatMessage({ id: 'author' })}`,
        },
      ]}
    />
  );
}

export default injectIntl(Head);
