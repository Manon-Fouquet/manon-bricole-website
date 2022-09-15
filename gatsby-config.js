module.exports = {
  siteMetadata: {
    title: "Manon Fouquet's blog",
    author:"Manon Fouquet"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/src/data/work`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      /*
      ![Alt text here](./image.jpg)
      ![GATSBY_EMPTY_ALT](./image.png) By default
      */
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 300
            }
          },
        ],
      }
    }
  ],
};