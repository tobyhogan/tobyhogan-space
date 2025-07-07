import type { GatsbyConfig } from "gatsby"

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {

        
        trackingIds: [ "G-0W2XN8P0M3", ],

        pluginConfig: {

          head: true,

        },
    
    },},
    'gatsby-plugin-postcss',
    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/posts/blog/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `patch-notes-posts`,
        path: `${__dirname}/src/posts/patch-notes/`,
      }
    },

    `gatsby-transformer-remark`,

    // ...
  ],

  pathPrefix: "",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tobyhogan.space`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config


/*

{
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icon.png"
    }},


*/