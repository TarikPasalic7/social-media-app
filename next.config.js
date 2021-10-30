const withPWA = require("next-pwa");

module.exports = withPWA({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  /* / images:{
        domains: ['links.papareact.com']
    } */
  images: {
    loader: 'imgix',
    path: '/'
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },

})
/*   module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
}); */
