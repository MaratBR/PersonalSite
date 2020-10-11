module.exports = {
    siteMetadata: {
      title: `Марат Бурнаев`,
      siteUrl: `https://burnaev.space`,
      description: `Blazing fast modern site generator for React`,
    },
    plugins: [
      'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-minify-classnames`,
        options: {
          dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
          enableOnDevelopment: true,
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://burnaev.space',
          policy: [{ userAgent: '*', disallow: '/' }]
        }
      }
    ]
}