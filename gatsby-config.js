module.exports = {
  siteMetadata: {
    title: `Volunteer Coordinator Playbook`,
    author: {
      name: `Klare Frank`,
      summary: `with Jessica Schultz, Alison Buchanan, and Jami Odell for HCDE Captson at the University of Washington.`,
    },
    description: `A template for managing your organization’s volunteer best practices.`,
    siteUrl: `https://klare.io/volunteer-coordinator-playbook`,
    social: {
      twitter: `klare`,
    },
  },
  pathPrefix: "/volunteer-coordinator-playbook",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/playbook`,
        name: `playbook`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Volunteer Coordinator Playbook`,
        short_name: `VolunteerPlaybook`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,400i,700,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
