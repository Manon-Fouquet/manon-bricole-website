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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/src/data/work`,
      }
    },
  ],
};