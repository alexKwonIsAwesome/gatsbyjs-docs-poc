/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const remarkSlug = require('remark-slug');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Docs',
    description: 'Prisma CRUD system generator for database-backed GraphQL servers.',
    author: 'Ahmed Elywa',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/Layouts/index.tsx`),
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        decks: [],
        defaultLayouts: {
          default: path.resolve('./src/components/MdxLayout.tsx'),
        },
        extensions: ['.mdx', '.md'],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-plugin-mdx-code-demo-oah',
            options: {
              demoComponent: path.resolve('./src/components/ExampleLayout'),
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
                prisma: 'prisma',
              },
              aliases: {},
              languageExtensions: [
                {
                  language: 'prisma',
                  extend: 'javascript',
                  definition: {
                    keyword: /(enum|model|generator|datasource)/,
                    'class-name': {
                      pattern: /^(\w+)(\s)(\w+)|(\s)[A-Z](\w+)/gm,
                      lookbehind: true,
                    },
                  },
                  insertBefore: {
                    'class-name': {
                      annotation: {
                        pattern: /(^|[^.])@+\w+/,
                        lookbehind: true,
                      },
                      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'oah-ui',
        short_name: 'OAH',
        start_url: '/dashboard',
        display: 'minimal-ui',
        icon: 'src/images/OAH.png', // This path is relative to the root of the site.
      },
    },
  ],
};
