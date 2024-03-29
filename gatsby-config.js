module.exports = {
  siteMetadata: {
    title: 'La Periférica',
    description: 'La Periférica Cultura Contemporánea',
    author: '@jlopezcur',
    siteUrl: 'https://laperifericacc.com',
  },
  mapping: {
    'MarkdownRemark.frontmatter.programs': 'MarkdownRemark.frontmatter.slug',
    'MarkdownRemark.frontmatter.projects': 'MarkdownRemark.frontmatter.slug',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-catch-links-intl',
      options: {
        excludePattern: /(\/es\/|\/en\/)/,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Droid Sans',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyled: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/data/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team',
        path: `${__dirname}/data/team/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/data/projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'featured',
        path: `${__dirname}/data/featured/current/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'programs',
        path: `${__dirname}/data/programs/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'conexions',
        path: `${__dirname}/data/conexions/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/data/posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-embedder',
          'gatsby-remark-images',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/data/i18n`,
        languages: ['en', 'es'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'La Periférica',
        short_name: 'La Periférica',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-165266387-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'laperifericacc.com',
      },
    },
  ],
};
