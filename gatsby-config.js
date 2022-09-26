module.exports = {
  siteMetadata: {
    title: "Manon Fouquet",
    author:"Manon Fouquet"
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve : "gatsby-plugin-sharp",
      options:{
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/src/data/work`,
        name:'pro_articles'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/work/images`,
        name:'pro_img'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `diy`,
        path: `${__dirname}/src/data/DIY`,
        name:'perso_articles'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/DIY/images`,
        name:'perso_img'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/art`,
        name:'art'
      }
    },
    `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // Footnotes mode (default: true)
      footnotes: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 300
          }
        }
      ],
    },
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Lato`,
          file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
        },
      ],
    },
  },
  {
    resolve:"gatsby-plugin-manifest",
    options:{
      icon:"src/images/favicon.png"
    }
  }
  ],
};