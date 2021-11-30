const path = require("path");
const pathPrefix = "/ForgottenLibrary";
// Change me
const siteMetadata = {
  title: "Forgotten Library",
  shortName: "Wiki",
  description: "A Wiki related to everything Warhammer Fantasy Roleplay",
  siteUrl: "https://thehergi.github.io",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        nav: [
          {
            title: "Github",
            url: "https://github.com/TheHergi/ForgottenLibrary",
          }
        ],
        editUrl: "https://github.com/TheHergi/ForgottenLibrary",
        sidebarComponents: ["summary", "tag"],
        // sidebarDefault: "summary",
        summaryDepth: 2, // specify summary depth if exist
        summary1DepthIndent: true, // specify summary depth 0 indent, default false, not indent, when depth>1, it will indent
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    }
  ],
};
