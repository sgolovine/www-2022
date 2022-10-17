/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sunny.gg",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  exclude: [
    "/apps/template",
    "/debug",
    // Exclude all resume pages until feature is ready
    "/resume/*",
  ],
}
