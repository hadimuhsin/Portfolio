module.exports = {
  siteMetadata: {
    title: `Lewis Gatsby Starter i18n`,
    description: `A custom Gatsby starter template to start a multilanguage website.`,
    author: `Lewis Llobera`,
    twitter: `@lewislbr`,
    email: `billobera@gmail.com`,
    siteUrl: `https://www.lewis-gatsby-starter-i18n.firebaseapp.com`,
    gitUrl: `https://github.com/lewislbr/lewis-gatsby-starter-i18n`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lewis Gatsby Starter i18n`,
        short_name: `LGSi18n`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134643417-6',
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        redirect: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
